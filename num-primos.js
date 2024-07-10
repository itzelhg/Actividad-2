//Realizar un programa que muestre todos los números primos en el rango que el usuario digite
let inicio = 20;
let fin = 30;
let suma = 0;

for (let numero = inicio; numero <= fin; numero++) {
    if (numero <= 1) continue;
    let Primo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            Primo = false;
            break;
        }
    }
    if (Primo) {
        suma += numero;
        console.log("%d es primo\n", numero); }
}

console.log("La suma de los números primos es: %d\n", suma); 