//Realizar un programa que determine si un triangulo es equilátero, isósceles o escaleno según las longitudes de sus lados

let lado1= 4;
let lado2= 4;
let lado3= 5;

if (lado1 === lado2 && lado3 === lado2 ){
    console.log("Es equilatero");

}else if  ((lado1 === lado2) || (lado1 === lado3) || (lado2 === lado3)) {
    console.log("Es isoceles");

}else {
    console.log("Es escaleno");
}