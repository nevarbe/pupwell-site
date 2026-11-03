const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const motionImages=[...document.querySelectorAll('.motion-image')];
const motionObserver='IntersectionObserver'in window?new IntersectionObserver(entries=>{for(const {target,isIntersecting}of entries){target.src=isIntersecting&&!document.hidden&&!reduceMotion.matches?target.dataset.motion:target.dataset.still;}},{rootMargin:'100px'}):null;
function syncMotion(){for(const image of motionImages){image.src=image.dataset.still;if(!reduceMotion.matches&&motionObserver){motionObserver.unobserve(image);motionObserver.observe(image);}}}
syncMotion();reduceMotion.addEventListener('change',syncMotion);document.addEventListener('visibilitychange',syncMotion);
if(!reduceMotion.matches&&'IntersectionObserver'in window){document.documentElement.classList.add('js-motion');const observer=new IntersectionObserver(entries=>{for(const {target,isIntersecting}of entries)if(isIntersecting){target.classList.add('is-visible');observer.unobserve(target);}},{threshold:.08});document.querySelectorAll('.reveal').forEach(item=>observer.observe(item));}
const goal=document.querySelector('.demo-goal');goal?.addEventListener('click',()=>{const done=goal.getAttribute('aria-pressed')!=='true';goal.setAttribute('aria-pressed',String(done));goal.querySelector('.goal-check').textContent=done?'✓':'';document.querySelector('.demo-caption').textContent=done?'One small step. That counts.':'Go on, try a little win.';});
document.querySelectorAll('[data-year]').forEach(node=>node.textContent=String(new Date().getFullYear()));
