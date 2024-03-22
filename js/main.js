const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

// клик по кнопке бургера
navBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  mobileNav.classList.toggle('mobile-nav--active');
  navBtn.classList.toggle('nav-button-close');
  body.classList.toggle('no-scroll');
});

// клик за пределами бургера
window.addEventListener('click', () => {
  if (body.classList.contains('no-scroll')) {
    body.classList.toggle('no-scroll');
    navBtn.classList.toggle('nav-button-close');
    mobileNav.classList.toggle('mobile-nav--active');
  }
})

// останавливаем клик внутри открытого бургера
mobileNav.addEventListener('click', (event) => {
  event.stopPropagation();
})
