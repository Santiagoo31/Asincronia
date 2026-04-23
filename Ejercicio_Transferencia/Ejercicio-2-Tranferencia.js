// Función que simula la promesa de entrega
const enviarPaquete = (id, tiempo, debeFallar) => {
    return new Promise((resolve, reject) => {
        console.log("En camino: Paquete #" + id);
        
        setTimeout(() => {
            if (debeFallar === true) {
                reject("Error en paquete #" + id);
            } else {
                resolve("Paquete #" + id + " entregado con éxito");
            }
        }, tiempo);
    });
};

export async function gestionarEntregas(paquetes) {
    console.log("--- INICIANDO ENTREGAS ---");
    
    // Lista para guardar los resultados finales
    let informe = [];

    // Usamos un bucle normal para procesar cada paquete de la lista
    for (let i = 0; i < paquetes.length; i++) {
        let p = paquetes[i];

        // Intentamos enviar el paquete
        enviarPaquete(p.id, p.tiempo, p.error)
            .then((mensaje) => {
                informe.push({ id: p.id, resultado: mensaje });
            })
            .catch((error) => {
                informe.push({ id: p.id, resultado: error });
            });
    }

    // Esperamos un poco para mostrar el informe final (simulación simple)
    setTimeout(() => {
        console.log("--- INFORME FINAL ---");
        console.table(informe);
    }, 4000); 
}