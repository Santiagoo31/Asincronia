const atenderUsuario = (nombre, tiempo) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(nombre), tiempo);
    });
};

export async function gestionarCola(listaUsuarios, tiempos) {
    let ordenAtencion = [];
    for (let i = 0; i < listaUsuarios.length; i++) {
        let nombreAtendido = await atenderUsuario(listaUsuarios[i], tiempos[i]);
        ordenAtencion.push(nombreAtendido);
    }
    return ordenAtencion;
}
