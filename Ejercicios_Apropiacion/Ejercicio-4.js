export function flujoDeDatos() {
    // Proceso 1
    setTimeout(() => {
        console.log("1. Datos tomados del servidor");
        
        // Proceso 2 (depende del 1)
        setTimeout(() => {
            console.log("2. Datos procesados y filtrados");
            
            // Proceso 3 (depende del 2)
            setTimeout(() => {
                console.log("3. Resultado mostrado en pantalla");
            }, 1000);
            
        }, 1000);
        
    }, 1000);
}