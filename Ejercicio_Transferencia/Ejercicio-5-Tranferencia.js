// EJERCICIO BÁSICO - Integración de servicios con async/await

// Función auxiliar para crear servicios simulados
function crearServicio(nombre, tiempoMs, resultado) {
  return async () => {
    // Simula el tiempo de respuesta del servicio
    await new Promise(resolve => setTimeout(resolve, tiempoMs));
    return resultado;
  };
}

// Servicios simulados
const servicioA = crearServicio('A', 800, {
  disponible: true,
  slots: 5
});

const servicioB = crearServicio('B', 600, {
  id: 123,
  nombre: "Ana García",
  email: "ana.garcia@example.com",
  nivel: "premium"
});

const servicioC = crearServicio('C', 1200, [
  { accion: "login", fecha: "2026-04-26" },
  { accion: "compra", fecha: "2026-04-25", monto: 89.99 },
  { accion: "vista", fecha: "2026-04-24" }
]);

// Servicio D depende de B y C
async function servicioD(infoUsuario, historial) {
  await new Promise(resolve => setTimeout(resolve, 900)); // tiempo simulado

  return [
    { id: 1, titulo: "Producto recomendado según tu historial", relevancia: "alta" },
    { id: 2, titulo: "Oferta especial para usuarios premium", relevancia: "media" }
  ];
}

// Función principal
async function procesarUsuario(userId = 123) {
  try {
    // 1. Ejecutar servicios A, B y C en PARALELO
    const [resultadoA, resultadoB, resultadoC] = await Promise.all([
      servicioA(),
      servicioB(),
      servicioC()
    ]);

    // 2. Validaciones básicas
    if (!resultadoA.disponible) {
      throw new Error("El recurso no está disponible");
    }
    if (!resultadoB.id) {
      throw new Error("No se obtuvo información del usuario");
    }

    // 3. Ejecutar Servicio D (depende de B y C)
    const recomendaciones = await servicioD(resultadoB, resultadoC);

    // 4. Retornar toda la información integrada
    return {
      exito: true,
      disponibilidad: resultadoA,
      usuario: resultadoB,
      historial: resultadoC,
      recomendaciones: recomendaciones,
      tiempoTotal: "aprox. 2100ms (por paralelismo)"
    };

  } catch (error) {
    return {
      exito: false,
      error: error.message
    };
  }
}


// Exportación por defecto (más común cuando solo hay una función principal)
export default procesarUsuario;

// Exportaciones nombradas (útil si quieres importar varias cosas)
export {
  procesarUsuario,
  servicioA,
  servicioB,
  servicioC,
  servicioD,
  crearServicio
};