const header = document.querySelector('.header')
const hero = document.querySelector('.hero')
const headerHeight = header.offsetHeight;
const heroHeight = hero.offsetHeight;

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance >= headerHeight + heroHeight) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed');
  }
})
