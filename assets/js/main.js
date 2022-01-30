const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

   // Validate that variables exist
   if (toggle && nav) {
      toggle.addEventListener('click', () => {
         // We add the show-menu class to the div tag with the nav__menu class
         nav.classList.toggle('show-menu');
      });
   }
};
showMenu('nav-toggle', 'nav-menu');

// remove menu mobile
const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
   const navMenu = document.getElementById('nav-menu');
   navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// scroll section active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
   const scrollY = window.pageYOffset;

   sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document
            .querySelector('.nav-menu a[href*=' + sectionId + ']')
            .classList.add('active-link');
      } else {
         document
            .querySelector('.nav-menu a[href*=' + sectionId + ']')
            .classList.remove('active-link');
      }
   });
}
window.addEventListener('scroll', scrollActive);

// dark theme

const dark = document.querySelector('.change-theme');
const html = document.querySelector('html');
dark.addEventListener('click', () => {
   if (html.dataset.colorMode === 'light') {
      html.dataset.colorMode = 'dark';
      dark.classList.add('bx-sun');
   } else {
      html.dataset.colorMode === 'dark';
      html.dataset.colorMode = 'light';
      dark.classList.remove('bx-sun');
   }
});
