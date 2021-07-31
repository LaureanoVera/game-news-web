const CACHE_NAME = 'v1_cache_web_news',
  urlsToCache = [
    './',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
    'https://fonts.gstatic.com',
    'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap',
    './styles/style.css',
    './js/script.js',
    './js/menuResponsive.js',
    './js/slide.js',
    './images',
    './images/showcase-01',
    './images/logo.jpg'
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', (e) => {

})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('active', (e) => {

})

//cuando el navegador recupera una url
self.addEventListener('fetch', (e) => {

})