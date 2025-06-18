let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Ejercicio 1
console.log("Mes 5:", meses[4]);
console.log("Mes 11:", meses[10]);

// Ejercicio 2
let mesesOrdenados = [...meses].sort();
console.log("Meses ordenados alfabéticamente:", mesesOrdenados);

// Ejercicio 3
meses.unshift("Inicio");
meses.push("Fin");
console.log("Con elementos agregados:", meses);

// Ejercicio 4
meses.shift();
meses.pop();
console.log("Con elementos quitados:", meses);

// Ejercicio 5
meses.reverse();
console.log("Meses en orden inverso:", meses);

// Ejercicio 6
let mesesUnidos = meses.join(" - ");
console.log("Meses unidos:", mesesUnidos);

// Ejercicio 7
let copiaMeses = meses.slice(meses.indexOf("Mayo"), meses.indexOf("Noviembre") + 1);
console.log("Copia de Mayo a Noviembre:", copiaMeses);
