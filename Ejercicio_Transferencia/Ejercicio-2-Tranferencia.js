export function gestionarEntregas(paquetes, demoras) {
    return paquetes.map((paquete, index) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(`Entrega: ${paquete}`), demoras[index]);
        });
    });
}
