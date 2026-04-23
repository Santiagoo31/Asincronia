export function ejercicio2() {
    console.log("Inicio de tarea pesada...");
    
    // Bloqueamos el hilo principal con un ciclo síncrono
    const inicio = Date.now();
    for (let i = 0; i < 5000000000; i++) {
        // Contando hasta 5 mil millones...
    }
    const fin = Date.now();

    console.log(`Tarea terminada. El hilo estuvo bloqueado por: ${(fin - inicio) / 1000} segundos`);
    console.log("Ahora sí puedo continuar con el resto del código.");
}