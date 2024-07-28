//array, lista, objeto o vector 
//son un conjunto de variables
//los objetos son entidades que tienen atributos y los atributos son todas las caracteristicas que pertenecen al objeto
//Ejemplo de como declarar un array
const datos = [1, "Hola", true, undefined, null];
const datos2 = new Array(1, "Hola", true, undefined, null);
const datos3 = Array(3); //Array con llenado posterior a la declaracion
datos3 [1] = "Hola Mundo";
datos3 [0] =1;
const datos4 = [datos1, datos2, datos3]; //Lista de listas

//Ejemplos de impresion 
console.log(datos);
console.log(datos2);
console.log(datos3);
console.log(datos4);

//objetos
//Ejemplo de un objeto 
const alumno //El alumno es el objeto = 
{
//Atributos
edad: 15,
peso: 80,
nombre: "Itzel"
isBlack; FontFaceSetLoadEvent,
amistades: ["confi1", "confi2", "confi3", "confi4"]

}

//Impresion de objetos
console.log(alumno);

//Impresion especifica
console.log(alumno.amistades);