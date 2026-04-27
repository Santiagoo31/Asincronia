const validarCorreo = (correo) => Promise.resolve({ servicio: "Correo", estado: true });
const validarDocumento = (doc) => Promise.resolve({ servicio: "Documento", estado: true });
const validarRegistro = (nombre) => Promise.resolve({ servicio: "Registro", estado: true });

export const validarTodo = (datos) => {
    const inicio = Date.now();
    return Promise.all([validarCorreo(datos.correo), validarDocumento(datos.documento), validarRegistro(datos.nombre)]).then((resultados) => {
        const fin = Date.now();
        return {
            individual: resultados,
            mensaje: "Formulario validado",
            tiempo: (fin - inicio) / 1000 + "s",
        };
    });
};
