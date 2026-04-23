import { ejercicio1 } from './Ejercicios_Apropiacion/Ejercicio-1.js';
import { ejercicio2 } from './Ejercicios_Apropiacion/Ejercicio-2.js';
import { procesarPedido } from './Ejercicios_Apropiacion/Ejercicio-3.js';
import { flujoDeDatos } from './Ejercicios_Apropiacion/Ejercicio-4.js';
// Transferencia //
import { gestionarCola } from './Ejercicio_Transferencia/Ejercicio-1-Tranferencia.js';
import { gestionarEntregas } from './Ejercicio_Transferencia/Ejercicio-2-Tranferencia.js';






//Punto de Entrada
// Listas simples
const personas = ["Santiago", "Andres", "Deivy"];
const espera = [2000, 1000, 3000];

const paquetes = ["A1", "B2", "C3"];
const demora = [3000, 500, 1500];

async function correr() {
    // Llamamos con las dos listas
    await gestionarCola(personas, espera);
    
    console.log("----------");
    
    // Llamamos con las dos listas
    gestionarEntregas(paquetes, demora);
}

correr();