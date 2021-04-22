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