'use strict';
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const images = [...document.querySelectorAll('.motion-image')];
const visible = new Set();
const loadedMotion = new Map();
function preload(url) {
  if (!loadedMotion.has(url)) loadedMotion.set(url, new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => { loadedMotion.delete(url); resolve(false); };
    image.src = url;
  }));
  return loadedMotion.get(url);
}
async function updateMotion(image) {
  const shouldPlay = visible.has(image) && !document.hidden && !reduced.matches;
  if (!shouldPlay) { image.src = image.dataset.still; return; }
  const loaded = await preload(image.dataset.motion);
  if (loaded && visible.has(image) && !document.hidden && !reduced.matches) image.src = image.dataset.motion;
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const { target, isIntersecting } of entries) {
      isIntersecting ? visible.add(target) : visible.delete(target);
      updateMotion(target);
    }
  }, { rootMargin: '80px' });
  images.forEach(image => observer.observe(image));
} else {
  images.forEach(image => { visible.add(image); updateMotion(image); });
}
const syncMotion = () => images.forEach(updateMotion);
reduced.addEventListener('change', syncMotion);
document.addEventListener('visibilitychange', syncMotion);

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab, focus = false) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    const panel = document.getElementById(item.getAttribute('aria-controls'));
    panel.hidden = !selected;
    panel.classList.toggle('panel-enter', selected);
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next], true); }
  });
});

document.querySelectorAll('.demo-goal').forEach(button => button.addEventListener('click', () => {
  const checked = button.getAttribute('aria-pressed') !== 'true';
  button.setAttribute('aria-pressed', String(checked));
  button.querySelector('.goal-check').textContent = checked ? '✓' : '';
  const count = document.querySelectorAll('.demo-goal[aria-pressed="true"]').length;
  document.querySelector('[data-goal-count]').textContent = count + ' / 3';
  document.querySelector('.demo-feedback').textContent = count === 3 ? 'Three little wins. Look at you.' : count ? 'One small step. That counts.' : 'Try a little win. Tap a goal.';
}));

const mascot = document.querySelector('.hero-mascot');
let greetingTimer;
mascot.addEventListener('click', () => {
  clearTimeout(greetingTimer);
  mascot.classList.remove('greet');
  mascot.querySelector('.hello-reply').textContent = 'You showed up. That’s a good start.';
  requestAnimationFrame(() => requestAnimationFrame(() => mascot.classList.add('greet')));
  greetingTimer = setTimeout(() => mascot.classList.remove('greet'), 3100);
});

const dialog = document.querySelector('.launch-dialog');
let appStoreUrl = '';
try {
  const candidate = new URL(window.PUPWELL_CONFIG?.appStoreUrl || '');
  if (candidate.protocol === 'https:' && candidate.hostname === 'apps.apple.com') appStoreUrl = candidate.href;
} catch { /* Pre-launch: keep the honest coming-soon state. */ }
document.querySelectorAll('[data-store]').forEach(link => {
  if (appStoreUrl) {
    link.href = appStoreUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if (typeof dialog.showModal === 'function') {
        event.preventDefault();
        if (!dialog.open) dialog.showModal();
      }
    });
  }
});
if (appStoreUrl) document.querySelectorAll('.release-status').forEach(node => { node.textContent = 'Available on the App Store'; });
dialog.querySelectorAll('button').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
document.querySelectorAll('[data-year]').forEach(node => node.textContent = String(new Date().getFullYear()));
if ('IntersectionObserver' in window && !reduced.matches) {
  const reveal = new IntersectionObserver(entries => entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) { target.classList.add('in-view'); reveal.unobserve(target); }
  }), { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(node => reveal.observe(node));
}

