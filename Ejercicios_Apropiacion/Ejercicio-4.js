export const flujoCallbacks = (final) => {
    setTimeout(() => {
        const paso1 = "Datos tomados";
        setTimeout(() => {
            const paso2 = `${paso1} -> Procesados`;
            setTimeout(() => {
                final(`${paso2} -> Resultado mostrado`);
            }, 1000);
        }, 1000);
    }, 1000);
};
