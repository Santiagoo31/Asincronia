import { ejercicio1 } from './Ejercicios_Apropiacion/Ejercicio-1.js';
import { ejercicio2 } from './Ejercicios_Apropiacion/Ejercicio-2.js';
import { procesarPedido } from './Ejercicios_Apropiacion/Ejercicio-3.js';
import { flujoDeDatos } from './Ejercicios_Apropiacion/Ejercicio-4.js';
import { promesas } from './Ejercicios_Apropiacion/Ejercicio-5.js';
import { promesas } from './Ejercicios_Apropiacion/Ejercicio-6.js';
import { esperar } from './Ejercicios_Apropiacion/Ejercicio-7.js';
import { buscarUsuario, consultarPermisos, generarReporte } from './Ejercicios_Apropiacion/Ejercicio-8.js';
// Transferencia //
import { gestionarCola } from './Ejercicio_Transferencia/Ejercicio-1-Tranferencia.js';
import { gestionarEntregas } from './Ejercicio_Transferencia/Ejercicio-2-Tranferencia.js';
import { validarTodo } from './Ejercicio_Transferencia/Ejercicio-3-Tranferencia.js';
import ventas from './Ejercicio_Transferencia/Ejercicio-4-Tranferencia.js';
import { procesarUsuario } from './Ejercicio_Transferencia/Ejercicio-5-Tranferencia.js';




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


// Ejecución Callbacks
versionCallbacks((resultado) => console.log(resultado));

// Ejecución Promesas
versionPromesas().then(resultado => console.log(resultado));

// Ejecución Async/Await
(async () => {
  const resultado = await versionAsyncAwait();
  console.log(resultado);
})();


const misDatos = {
    correo: "test@correo.com",
    documento: "12345",
    nombre: "Deivy"
};

// Ejecutamos y recibimos la respuesta
validarTodo(misDatos).then((respuesta) => {
    // La variable 'respuesta' ya tiene el objeto con los tiempos y estados
    // Aquí podrías enviarlo a tu HTML o usarlo como necesites
    return respuesta; 
});