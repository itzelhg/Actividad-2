//String (cadena de caracteres)

let str_1 = "Hola soy texto con comillas";
let str_2 = 'Hola soy un texto con comillas simples';
let str_3 = "comillas dentro de las comillas \"ejemplo\"";
let str_4 = 'comillas dentro de comillas simple "ejemplo"';
let str_5 = "comillas dentro de comillas 'ejemplo'";

console.log (str_1)
console.log (str_2)
console.log (str_3)
console.log (str_4)
console.log (str_5)

//comillas invertidas (backticks) Alt gr + } x2 ``
//Son para meter una variable dentro del valor de otra variable
let str_6 = `comillas invertidas o backtiks`;
console.log (str_6)

let nombre = "Itzel";
let saludar = `Hola, ${nombre} Bienvenida`;
console.log (saludar)

let plantilla = `
<html>
<h3> Pagina web de ${nombre}</h3>
<p> Esto es un parrafo </p>
</html>
`
console.log (plantilla)

