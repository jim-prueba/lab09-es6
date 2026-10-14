import { curso, estudiantes } from "./datos.js";
import { reporte } from "./calculos.js";

// clonar el primer estudiante cambiando su nombre
const nuevo = { ...estudiantes[0], nombre: "Ana María" };

// fusiona la lista original con el nuevo registro
const todos = [...estudiantes, nuevo];

// DOM para mostrar en la página
const listaReportes = document.querySelector("#reportes");

console.log(`Curso: ${curso}`);

todos.forEach((estudiante) => {
  const resultado = reporte(estudiante);

  // imprime en la consola
  console.log(resultado);

  if (listaReportes) {
    listaReportes.innerHTML += `<li>${resultado}</li>`;
  }
});

// Tarea terminada
