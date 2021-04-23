// ====== Cambio de Fondo Showcase ======
const thisImage = document.querySelector('.showcase'); // background para header
const text = document.querySelector('.showcase__text'); // texto del header
let countImage = 1; // para controlar la imagen
thisImage.style.backgroundImage=`url("./images/showcase-01.jpg")`; // imagen con la que inicia

const textChange = () => {
  // cambia la descripcion dependiendo cual es la imagen del juego
  switch (countImage) {
    case 1:
      text.textContent=`Vive el survival horror como nunca antes en la 8.ª entrega principal de la aclamada serie Resident Evil: Resident Evil Village. El terror más realista e inescapable, con gráficos hiperdetallados, intensa acción en 1.ª persona y una trama magistral.`;
      break;
      
    case 2:
      text.textContent=`La precuela mejorada de NieR:Automata. Un bondadoso joven parte en compañía de Grimoire Weiss, un extraño libro parlante, en busca de los Versos sellados para salvar a su hermana Yonah, enferma de necrosis rúnica.`;  
      break;
    
    case 3:
      text.textContent=`DRAGON BALL XENOVERSE 2 sucede al popular DRAGON BALL XENOVERSE y viene con gráficos mejorados que sumergirán al jugador en el mayor y más detallado mundo de Dragon Ball jamás desarrollado.`;
      break;

    case 4:
      text.textContent=`Un oscuro misterio que solo una médium puede resolver: viaja a un complejo turístico comunista abandonado y usa tus habilidades psíquicas para revelar sus inquietantes secretos, resolver puzles en realidades paralelas, sobrevivir a encuentros con siniestros espíritus y explorar dos realidades.`;
      break;

    case 5:
      text.textContent=`El detective Sebastián Castellanos lo ha perdido todo, incluida su hija Lily. Para salvarla, debe descender al mundo de pesadilla de STEM. Amenazas terribles surgen de cada esquina y debe confiar en su ingenio para sobrevivir. Para redimirse, su única forma de salir es entrar.`;
      break;

    default:
      break;
  }
}

// LEFT CHANGES
const leftChange = () => {
  // cambia el fondo dependiendo el numero de countImage
  // resta 1 a countImage
  if (countImage > 1) {
    countImage -= 1;
  }
  return countImage, thisImage.style.backgroundImage=`url('./images/showcase-0${countImage}.jpg')`;
}

const buttonLeft = document.querySelector('.showcase__left'); // boton izquierdo
buttonLeft.addEventListener('click', leftChange); // llama la funcion leftChange() al click
buttonLeft.addEventListener('click', textChange); // llama la funcion textChange() al click

// RIGHT CHANGES
const rightChange = () => {
  // cambia el fondo dependiendo el numero de countImage
  // suma 1 a countImage
  if (countImage < 5) {
    countImage += 1;
  }
  return countImage, thisImage.style.backgroundImage=`url('./images/showcase-0${countImage}.jpg')`;
}

const buttonRight = document.querySelector('.showcase__right'); // boton derecho
buttonRight.addEventListener('click', rightChange); // llama la funcion leftChange() al click
buttonRight.addEventListener('click', textChange); // llama la funcion textChange() al click