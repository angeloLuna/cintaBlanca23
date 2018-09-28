// definimos las constantes de los elementos de html
const btn = document.getElementById('btn-submit');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const tagResultado = document.getElementById('resultado')

// imprimimos para verificar que se leen correctamente
// console.log(btn);
// console.log(input1);
// console.log(input2);

const calcular = ()=>{
	// previene la recarga de la página
	event.preventDefault()

	let num1 = input1.value;
	let num2 = input2.value;
	let res = 0;

	if (num1 === "" || num2 === "") {
		alert("No puedes dejar vacío un número");
	}else{
		res = num1 * num2;
		tagResultado.innerHTML = `El resultado es: ${res}`
	}
}

// funcion que prueba si obtenemos los números correctamente
const test = ()=>{
	event.preventDefault()
	let num1 = input1.value
	let num2 = input2.value
	console.log(num1, num2);
}

// escuchador de evento click que dispara una función
btn.addEventListener('click', calcular)

