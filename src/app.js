import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


document.addEventListener('DOMContentLoaded'), () => {
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
  const extensiones = [".com",".es",".net",".io",".app",".nl",".us","uk"];
  const dominioElemento = document.getElementById("dominio-generado");
  const botonGenerar = document.getElementById("boton-generador");

  function obtenerDominio(array){
    const indice = Math.floor(Math.random() * array.length);
  }
}