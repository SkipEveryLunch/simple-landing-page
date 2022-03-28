const navBtn = document.getElementById('menu-btn');
const navlinks = document.getElementById('navlinks');
navBtn.addEventListener('click', () => {
  navlinks.setAttribute(
    'aria-expanded',
    navlinks.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
  );
});
