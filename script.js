const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header .nav');

if (menu && nav) {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-controls', 'main-navigation');
  nav.id = 'main-navigation';

  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    menu.textContent = isOpen ? '×' : '☰';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Abrir menu');
      menu.textContent = '☰';
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Abrir menu');
      menu.textContent = '☰';
      menu.focus();
    }
  });
}
