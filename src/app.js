import "bootstrap";
import "./style.css";


document.addEventListener('DOMContentLoaded', () => {
  //Listas de palabras para crear el dominio
  const partesDominio = {
    prefijos: [
      "super", "mega", "ultra", "hyper", "pro", "rápido", "fácil", "inteligente",
      "genial", "digital", "global", "futuro", "mejor", "sólido", "experto"
    ],
    sustantivos: [
      "web", "app", "solución", "software", "idea", "creador", "guía", "foco",
      "proyecto", "tienda", "base", "nube", "mundo", "maestro", "ruta"
    ],
    sufijos: [
      "ahora", "online", "ya", "plus", "hub", "lab", "io", "tech",
      "box", "go", "net", "top", "store", "zone", "up"
    ],
  };
  const extensiones = [".com",".es",".net",".io",".app",".nl",".us",".uk"];

  const dominioElemento = document.getElementById("dominio-generado");
  const botonGenerar = document.getElementById("boton-generador");

  

  function obtenerAleatorio(array){
    const indice = Math.floor(Math.random() * array.length);
    return array[indice];
  }

  function generarDominioConBucle(){
    let nombreDominio = "";

    const listasDePalabras = Object.values(partesDominio);

    for (let i = 0; i < listasDePalabras.length; i++){
      const listaActual = listasDePalabras[i];
      const palabraAleatoria = obtenerAleatorio(listaActual);

      nombreDominio += palabraAleatoria;
    }
    const extension = obtenerAleatorio(extensiones);
    const dominioCompleto = nombreDominio.toLowerCase() + extension;
    dominioElemento.textContent = dominioCompleto;
  }
  botonGenerar.addEventListener('click', generarDominioConBucle);
  generarDominioConBucle();
});