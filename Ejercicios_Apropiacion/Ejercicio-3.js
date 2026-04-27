export function procesarPedido(callback) {
    setTimeout(() => {
        callback("Pedido entregado");
    }, 3000);
}