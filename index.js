//codigo que le pida al usuario su edad y si es mayor de edad, preguntarle su nombre y aoellido y lo salude en el dom "hola cristian"
//y si no que le ponga en el dom, "lo siento chiquitin"

let edad;
let nombre, apellido;

edad = prompt("Introduce tu edad")

if (edad > 17) {
    nombre = prompt("Introduce tu nombre")
    apellido = prompt("Introduce tu apellido")
    document.write(`Hola ${nombre} ${apellido}`)
} else {
    document.write("Lo siento no eres mayor de edad!")
}



