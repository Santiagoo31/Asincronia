export function tomarDatos(callback) {
  setTimeout(() => {
    console.log("📥 Datos tomados");
    const datos = [1, 2, 3];
    callback(datos);
  }, 1000);
}

export function procesarDatos(datos, callback) {
  setTimeout(() => {
    console.log("⚙️ Datos procesados");
    const resultado = datos.map(num => num * 2);
    callback(resultado);
  }, 1000);
}

export function mostrarResultado(resultado) {
  setTimeout(() => {
    console.log("📤 Resultado:", resultado);
  }, 1000);
}

import { tomarDatos, procesarDatos, mostrarResultado } from "./callbacks.js";

tomarDatos((datos) => {
  procesarDatos(datos, (resultado) => {
    mostrarResultado(resultado);
  });
});

export function tomarDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📥 Datos tomados");
      resolve([1, 2, 3]);
    }, 1000);
  });
}

export function procesarDatos(datos) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("⚙️ Datos procesados");
      resolve(datos.map(num => num * 2));
    }, 1000);
  });
}

export function mostrarResultado(resultado) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📤 Resultado:", resultado);
      resolve();
    }, 1000);
  });
}