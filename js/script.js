if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./js/sw.js')
    .then(reg => console.log('Registro SW exitoso', reg))
    .catch(err => console.warn(err))
}