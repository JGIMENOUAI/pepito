// Ejercicio 1
function suma(a, b) {
    return a + b;
}
let resultado = suma(5, 7);
console.log("Resultado de la suma:", resultado);

// Ejercicio 2
function sumaValidada(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    return a + b;
}
console.log("Suma validada:", sumaValidada(5, "hola"));

// Ejercicio 3
function validateInteger(num) {
    return Number.isInteger(num);
}
console.log("¿Es entero?", validateInteger(10.5));

// Ejercicio 4
function sumaConEnteros(a, b) {
    if (!validateInteger(a)) {
        alert("Primer número no es entero. Se redondeará.");
        a = Math.round(a);
    }
    if (!validateInteger(b)) {
        alert("Segundo número no es entero. Se redondeará.");
        b = Math.round(b);
    }
    return a + b;
}
console.log("Suma con enteros:", sumaConEnteros(4.7, 3.2));

// Ejercicio 5
function validarYRedondear(num) {
    if (!validateInteger(num)) {
        alert("Número no entero. Se redondeará.");
        return Math.round(num);
    }
    return num;
}

function sumaFinal(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    a = validarYRedondear(a);
    b = validarYRedondear(b);
    return a + b;
}
console.log("Suma final:", sumaFinal(2.9, "hola"));
