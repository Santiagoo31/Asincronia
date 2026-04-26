// 1. Validar stock (OBLIGATORIO)
export function validarStock(producto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hayStock = Math.random() > 0.2; // 80% probabilidad

      if (hayStock) {
        console.log("Stock disponible");
        resolve(producto);
      } else {
        reject("No hay stock disponible");
      }
    }, 1000);
  });
}

// 2. Calcular costos (OBLIGATORIO)
export function calcularCostos(producto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = producto.precio * producto.cantidad;
      console.log("💰 Costo calculado:", total);
      resolve({ ...producto, total });
    }, 1000);
  });
}

// 3. Recomendaciones (OPCIONAL)
export function generarRecomendaciones() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Recomendaciones generadas");
      resolve("Producto sugerido: Audífonos");
    }, 1000);
  });
}

// 4. Enviar factura (OBLIGATORIO)
export function enviarFactura(pedido) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Factura enviada. Total:", pedido.total);
      resolve("Factura enviada correctamente");
    }, 1000);
  });
}

import {
  validarStock,
  calcularCostos,
  generarRecomendaciones,
  enviarFactura
} from "./ventas.js";

const producto = {
  nombre: "Laptop",
  precio: 1000,
  cantidad: 1
};

// Flujo principal
validarStock(producto)
  .then((prod) => calcularCostos(prod))
  .then((pedido) => {
    
    // Paso opcional (no bloquea el flujo)
    generarRecomendaciones()
      .then((rec) => console.log("💡", rec))
      .catch(() => console.log("⚠ No se pudieron generar recomendaciones"));

    return enviarFactura(pedido); // depende de los anteriores
  })
  .then((msg) => console.log(msg))
  .catch((error) => console.error(" Error en el proceso:", error));