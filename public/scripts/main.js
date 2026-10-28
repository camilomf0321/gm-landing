'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacion');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') { closeMenu(); menuButton.blur(); }
});
window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
const config = window.GM_CONFIG || {};
const validNumber = /^[1-9]\d{7,14}$/.test(config.whatsappNumber || '');
if (validNumber) {
  document.querySelector('.pending-note').textContent = 'Consulta disponibilidad y condiciones con nuestro equipo.';
  document.querySelector('.contact-panel > p').textContent = `Consulta productos y solicita una cotización con nuestro equipo comercial por WhatsApp al +${config.whatsappNumber}.`;
  document.querySelector('.contact-status').textContent = 'Abrir conversación en WhatsApp';
}
const dialog = document.querySelector('#quote-dialog');
document.querySelectorAll('[data-quote]').forEach(button => {
  if (validNumber) {
    const message = encodeURIComponent((config.whatsappMessage || 'Hola, quisiera cotizar: ') + button.dataset.quote);
    button.href = `https://wa.me/${config.whatsappNumber}?text=${message}`;
    return;
  }
  button.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('#quote-interest').textContent = button.dataset.quote;
    dialog.showModal();
  });
});
document.querySelectorAll('.dialog-close, .dialog-dismiss').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
}});
document.querySelector('#year').textContent = new Date().getFullYear();
