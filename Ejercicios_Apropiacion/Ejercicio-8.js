// Simuladores de procesos (Promesas)
export const buscarUsuario = () => new Promise(resolve => setTimeout(() => resolve("Usuario encontrado"), 1000));
export const consultarPermisos = () => new Promise(resolve => setTimeout(() => resolve("Permisos otorgados"), 2000));
export const generarReporte = () => new Promise(resolve => setTimeout(() => resolve("Reporte generado"), 1000));

function procesoCallbacks() {
  console.log("Iniciando con Callbacks...");
  buscarUsuario().then(() => { // Simulamos el callback usando then simple
    consultarPermisos().then(() => {
      generarReporte().then(() => {
        console.log("Reporte finalizado (Callbacks)");
      });
    });
  });
}

function procesoPromesas() {
  console.log("Iniciando con Promesas...");
  buscarUsuario()
    .then(() => consultarPermisos())
    .then(() => generarReporte())
    .then(() => console.log("Reporte finalizado (Promesas)"))
    .catch(err => console.error("Error:", err));
}

async function procesoAsyncAwait() {
  console.log("Iniciando con Async/Await...");
  try {
    await buscarUsuario();
    await consultarPermisos();
    await generarReporte();
    console.log("Reporte finalizado (Async/Await)");
  } catch (error) {
    console.error("Error en el proceso:", error);
  }
}