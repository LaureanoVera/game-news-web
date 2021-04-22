document.querySelector('.menu-responsive').addEventListener('click', () => {
  document.querySelector('.nav-main__menu').classList.toggle('show');
});
ScrollReveal().reveal('.scroll');
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cars', { delay: 300 });
ScrollReveal().reveal('.news-cards__image', { delay: 300 });
ScrollReveal().reveal('.news-cards__title', { delay: 300 });
ScrollReveal().reveal('.banner-one', { delay: 300 });
ScrollReveal().reveal('.banner-two', { delay: 300 });
ScrollReveal().reveal('.banner-three', { delay: 300 });

