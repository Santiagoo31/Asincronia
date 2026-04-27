// --- 1. TUS IMPORTACIONES (APROPIACIÓN) ---
import { ejercicio1 } from "./Ejercicios_Apropiacion/Ejercicio-1.js";
import { ejercicio2 } from "./Ejercicios_Apropiacion/Ejercicio-2.js";
import { procesarPedido } from "./Ejercicios_Apropiacion/Ejercicio-3.js";
import { flujoCallbacks } from "./Ejercicios_Apropiacion/Ejercicio-4.js";

// --- 2. TUS IMPORTACIONES (TRANSFERENCIA) ---
import { gestionarCola } from "./Ejercicio_Transferencia/Ejercicio-1-Tranferencia.js";
import { gestionarEntregas } from "./Ejercicio_Transferencia/Ejercicio-2-Tranferencia.js";
import { validarTodo } from "./Ejercicio_Transferencia/Ejercicio-3-Tranferencia.js";

// --- 3. IMPORTACIONES DE TUS COMPAÑEROS (Mantenlas para no romper el código) ---
// Si ellos usaron el mismo nombre "promesas", cámbialos aquí con "as"
import { promesas as promesas5 } from "./Ejercicios_Apropiacion/Ejercicio-5.js";
import { promesas as promesas6 } from "./Ejercicios_Apropiacion/Ejercicio-6.js";
import { esperar } from "./Ejercicios_Apropiacion/Ejercicio-7.js";
import { integrador8 } from "./Ejercicios_Apropiacion/Ejercicio-8.js";
import ventas from "./Ejercicio_Transferencia/Ejercicio-4-Tranferencia.js";
import { procesarUsuario } from "./Ejercicio_Transferencia/Ejercicio-5-Tranferencia.js";

// --- 4. DATOS DE PRUEBA ---
const personas = ["Santiago", "Andres", "Deivy"];
const espera = [1000, 500, 1500];
const misDatos = { correo: "test@sena.edu.co", documento: "123", nombre: "Deivy" };

// --- 5. EJECUCIÓN ---
async function ejecutarProyecto() {
    // Aquí puedes llamar tus funciones para verificar que todo sirve
    // Ej:
    const resultadoCola = await gestionarCola(personas, espera);

    validarTodo(misDatos).then((res) => {
        // Validación lista
    });
}

ejecutarProyecto();
