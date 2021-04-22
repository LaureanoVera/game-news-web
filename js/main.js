// ====== Scroll Reveal ======
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

// ====== Cambio de Fondo Showcase ======
const thisImage = document.querySelector('.showcase');
let countImage = 1;
thisImage.style.backgroundImage=`url('../images/showcase-0${countImage}.jpg')`;

  // Left Changes
const leftChange = () => {
  if (countImage > 1) {
    countImage -= 1;
  }
  return thisImage.style.backgroundImage=`url('../images/showcase-0${countImage}.jpg')`;
}

const buttonLeft = document.querySelector('.showcase__left');
buttonLeft.addEventListener('click', leftChange);

  // Right Changes
const rightChange = () => {
  if (countImage < 4) {
    countImage += 1;
  }
  return thisImage.style.backgroundImage=`url('../images/showcase-0${countImage}.jpg')`;
}

const buttonRight = document.querySelector('.showcase__right');
buttonRight.addEventListener('click', rightChange);

// ====== Barra de Scroll ======
window.addEventListener('scroll', () => {
  const top = document.documentElement.scrollTop;

  const heightObj = {
    scroll: document.documentElement.scrollHeight,
    client: document.documentElement.clientHeight
  }
  const height = heightObj.scroll - heightObj.client;

  const totalScrolled = (top / height) * 100;
  document.querySelector('.scroll-bar').style.width = `${totalScrolled}%`;
});