// Mandamos llamar elementos de html
const baseJS = document.getElementById("basehtml")
const alturaJS = document.getElementById("alturahtml")
const calcularJS = document.getElementById("calcularhtml")

// definimos una funcion llamada calcularArea
const calcularArea = ()=>{
	let base = baseJS.value
	let altura = alturaJS.value
	let resultado = base * altura
	console.log(resultado)
}

// Escuchador de evento click que ejecuta la funcion calcular area
calcularJS.addEventListener("click",calcularArea)