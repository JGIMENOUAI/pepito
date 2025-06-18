// Ejercicio 1
let texto = "javascriptesgenial";
let mayusculas = texto.toUpperCase();
console.log("Mayúsculas:", mayusculas);

// Ejercicio 2
let texto2 = "programacionweb";
let primeros5 = texto2.substring(0, 5);
console.log("Primeros 5 caracteres:", primeros5);

// Ejercicio 3
let ultimos3 = texto2.substring(texto2.length - 3);
console.log("Últimos 3 caracteres:", ultimos3);

// Ejercicio 4
let texto3 = "desarrollador";
let capitalizado = texto3.substring(0, 1).toUpperCase() + texto3.substring(1).toLowerCase();
console.log("Capitalizado:", capitalizado);

// Ejercicio 5
let texto4 = "hola mundo";
let posicionEspacio = texto4.indexOf(" ");
console.log("Posición del primer espacio:", posicionEspacio);

// Ejercicio 6
let texto5 = "desarrollador frontend";
let espacio = texto5.indexOf(" ");
let palabra1 = texto5.substring(0, espacio);
let palabra2 = texto5.substring(espacio + 1);
let resultado = palabra1.substring(0, 1).toUpperCase() + palabra1.substring(1).toLowerCase() + " " +
palabra2.substring(0, 1).toUpperCase() + palabra2.substring(1).toLowerCase();
console.log("Capitalización doble:", resultado);
