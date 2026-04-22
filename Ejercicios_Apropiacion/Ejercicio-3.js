export function procesarPedido(callback) {
    console.log("Preparando la comida... (espera 3 segundos)");
    
    setTimeout(() => {
        const mensaje = "Pedido entregado";
        callback(mensaje);
    }, 3000);
}