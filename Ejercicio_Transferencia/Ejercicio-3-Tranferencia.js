// Funciones que simulan la espera de un servidor
export const validarCorreo = (correo) => {
    return Promise.resolve({ servicio: "Correo", estado: true });
};

export const validarDocumento = (doc) => {
    return Promise.resolve({ servicio: "Documento", estado: true });
};

export const validarRegistro = (nombre) => {
    return Promise.resolve({ servicio: "Registro", estado: true });
};

// Función principal que junta todo
export const validarTodo = (datos) => {
    const inicio = Date.now();

    // Promise.all recibe una lista de funciones y las lanza al mismo tiempo
    return Promise.all([validarCorreo(datos.correo), validarDocumento(datos.documento), validarRegistro(datos.nombre)]).then((resultados) => {
        const fin = Date.now();

        // Creamos el objeto final con los resultados
        return {
            individual: resultados,
            mensaje: "Formulario validado",
            tiempo: (fin - inicio) / 1000 + "s",
        };
    });
};
