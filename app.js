//declarar variables en js
//let nombre;
//nombre = prompt("Dime tu nombre");
//console.log(nombre);
//document.write(nombre);

let nombre = `hola como estas roberto`
let edad = prompt("Introduce edad")
alert(Number(edad) + 5)

let bool = true;
let menor = (10==5);
console.log(menor);


//operadores aritmeticos
let suma = 1+2;
let resta = 2-1;
let multiplication = 2*2;
let division = 2/2;
let mod = 10 % 5; // residuo

let uno = 1; 
uno++;
console.log(uno);

let dos = 2;
dos-- 
console.log(dos);

let menorigualque = 2 >= 3;
let mayorigualque = 3 <= 2;
let igual = 10 == "10";
let exactamenteigual = 10 === "10";
let diferente = 10 != 30;


//tipos de datos especiales

//arrays
let frutas = ["melon", "pera", "sandia"];
let numeros = ["uno", 3, 23, "cuarenta"];

//objetos
let persona = { nombre: "roberto", edad: 18, correo: "ratilano@ucol.mx"}

//OBJETOJSON (Javascript Object notation) formato de datos ligero y descripciones, sirve para manejar informaciones
let personas = [
    {nombre: "roberto", edad: 18, correo: "ratilano@ucol.mx"},
    {nombre: "osmar", edad: 18, correo: "osmar@ucol.mx"},
    {nombre: "imanol", edad: 18, correo: "imanol@ucol.mx",},
    personas
]

//operadores logicos
// --&-- si una es falsa todo es falso.
let numero = 1
let numero2 = 2
let and = (numero >10 && numero2 > 10);


// ---- || ---- si una sola es verdadera todo es verdadero.
let or = (numero >10 || numero2 > 10);


// ! invierte el resultado
let invert = !(numero >10);

