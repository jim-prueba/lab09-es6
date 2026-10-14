// promedio de la nota
export const promedio = (...notas) => {
  const suma = notas.reduce((acc, nota) => acc + nota, 0);
  return suma / notas.length;
};

// estado de la nota
export const estado = (nota, minima = 13) => {
  return nota >= minima ? "Aprobado" : "Desaprobado";
};

// reporte del estudiante
export const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};
