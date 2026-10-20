
interface ruleta {
  nombre: string;
  opciones: string[];
}

const miRuleta: ruleta ={
    nombre: "ruleta de la suerte",
    opciones: ["opcion 1", "opcion 2", "opcion 3"]
}

console.log(`Nombre de la ruleta: ${miRuleta.nombre}`);
console.log(`Opciones de la ruleta: ${miRuleta.opciones.join(", ")}`);  
