// Función básica para simular la espera
function atenderUsuario(nombre, tiempo) {
    return new Promise(function(resolve) {
        console.log("Atendiendo a: " + nombre);
        
        setTimeout(function() {
            console.log("Listo: " + nombre);
            resolve(nombre); // Solo devolvemos el nombre para simplificar
        }, tiempo);
    });
}

export async function gestionarCola(listaUsuarios) {
    console.log("--- INICIO DE LA FILA ---");
    
    let ordenAtencion = [];

    // El bucle 'for...of' con 'await' hace que el código espere
    // a que cada usuario termine antes de pasar al siguiente.
    for (let usuario of listaUsuarios) {
        // El programa se detiene aquí hasta que la promesa termina
        let nombreAtendido = await atenderUsuario(usuario.nombre, usuario.tiempo);
        
        ordenAtencion.push(nombreAtendido);
    }

    console.log("--- PROCESO TERMINADO ---");
    console.log("Usuarios atendidos en orden:");
    console.log(ordenAtencion);
}