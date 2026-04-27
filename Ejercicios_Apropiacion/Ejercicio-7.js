// Función que retorna una promesa
export const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function ejecutarTarea() {
  console.log("Iniciando espera de 2 segundos...");

  // El hilo no se bloquea, pero la ejecución de esta función se pausa aquí
  await esperar(2000);

  console.log("¡Tarea completada después de 2 segundos!");
}

ejecutarTarea();