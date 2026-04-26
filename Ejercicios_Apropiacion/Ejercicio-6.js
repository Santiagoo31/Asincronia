export function procesoAleatorio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() < 0.5;

      if (exito) {
        resolve("Proceso exitoso");
      } else {
        reject("Error en el proceso");
      }
    }, 1000);
  });
}
import { procesoAleatorio } from "./app.js";

procesoAleatorio()
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });