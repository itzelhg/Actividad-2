//Realizar un programa que sume todos los números pares del 0 al 1,000

let num = 0;
function suma(inicio, fin) {
    if (inicio > fin) {
        return 0;
    } else if (inicio % 2 === 0) {
        return inicio + suma(inicio + 2, fin);
    } else {
        return suma(inicio + 1, fin);
    }
}

suma = suma(0, 1000);
console.log("La suma de los numeros pares es: " + suma);