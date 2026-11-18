(() => {
const form = document.getElementById('waitlist-form');
if (!form) return;
const button = form.querySelector('button'), label = button.querySelector('span'), error = document.getElementById('form-error');
let busy = false;
form.addEventListener('submit', async event => {
event.preventDefault();
if (busy || !form.reportValidity()) return;
const name = form.elements.namedItem('name');
name.value = name.value.trim();
if (!name.value) { name.setCustomValidity('Please tell us your name.'); name.reportValidity(); name.addEventListener('input', () => name.setCustomValidity(''), {once:true}); return; }
busy = true; button.disabled = true; label.textContent = 'Saving your spot…'; form.setAttribute('aria-busy','true'); error.hidden = true;
try {
const response = await fetch('/', {method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body:new URLSearchParams(new FormData(form)).toString()});
if (!response.ok) throw new Error('Signup failed');
document.getElementById('success-title').textContent = `You’re on the list, ${name.value}!`;
form.hidden = true; const success = document.getElementById('signup-success'); success.hidden = false; success.focus(); form.reset();
} catch { error.textContent = 'We couldn’t save your spot just now. Please try again, or email hello@trypupwell.app and we’ll help.'; error.hidden = false; }
finally { busy = false; button.disabled = false; label.textContent = 'Save my spot'; form.removeAttribute('aria-busy'); }
});
})();