// Ejercicio 1
let palabras = ["manzana", "banana", "naranja", "sandía", "melón"];
for (let i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}

// Ejercicio 2
for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let capitalizada = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    alert(capitalizada);
}

// Ejercicio 3
let sentence = "";
for (let i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
alert("Frase completa: " + sentence.trim());

// Ejercicio 4
let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(i);
}
console.log("Array de números:", numeros);
