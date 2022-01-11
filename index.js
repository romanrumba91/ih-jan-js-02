// FUNCIONES

// SON FÁBRICAS DE CÓDIGO QUE SE PUEDEN REUTILIZAR LAS VECES NECESARIAS.


// 1. FUNCIÓN DECLARATIVA
// JAVASCRIPT TRADICIONAL
// CARACTERÍSTICA ADICIONAL - HOISTING

console.log(saludar("english"))

// LO QUE SE ENCUENTRA DENTRO DE LOS PARENTESIS EN LA DECLARACIÓN SE LA LLAMAN PARÁMETROS
function saludar(idioma) {
	
	let resultado

	switch (idioma) {
		case "spanish":
			// return "Hola mundo!"
			resultado = "Hola mundo!"
			break // break significa salir del switch

		case "english":
			// return "Hello world!"
			resultado = "Hello world!"
			break

		case "chinese":
			// return "ni hao!"
			resultado = "ni hao!"
			break

		default: 
			// return "No hubo una especificación del idioma"
			resultado = "No hubo una especificación del idioma"
			break
	}

	return resultado

} 

// TODA FUNCIÓN TIENE SU INVOCACIÓN
const resultado1 = saludar()
const resultado2 = saludar("spanish")
const resultado3 = saludar("chinese")

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)

// 2. FUNCIONES DE EXPRESIÓN
// PROPUESTA DE JAVASCRIPT MODERNO
// DECLARES DE LA FUNCIÓN Y LA ASIGNES A UNA VARIABLE
// NO CUENTAN CON LA CARACTERÍSTICA DE HOISTING

// A. NORMAL
const despedirse = function (nombre) {

	return `Me dio gusto verte, ${nombre}`

}

console.log(despedirse("Sam"))



// B. FLECHA
// VERSION COMPLETA
const gritarUno = () => {

    return "se me va mojar la ropa"

}

console.log (gritarUno())

// SINTETIZADA
// CONDICION (SOLO UNA SENTENCIA DENTRO DE LA FUNCION)

const gritarDos = () => "Aguas"

console.log (gritarDos())