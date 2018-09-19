// let palabra = prompt("ingresa cualquier texto");
// let palabraCambiada = ""


// for(let i = 0 ; i < palabra.length; i++){
//   if (i%2 === 0) {
//     palabraCambiada += palabra[i].toUpperCase()
//   }else{
//     palabraCambiada += palabra[i].toLowerCase()
//   }

// }
// console.log(palabraCambiada)
// console.log(palabra+ palabraCambiada)

// un ciclo que evalúe si una palabra es un palíndromo

// input = oso

// output = "Sí es palindromo" | "No es palíndromo"


let palabra = prompt("palabra");
// let aux = ""
let validacion = true;

// let inicio = palabra.length -1

// for(let i = inicio; i >= 0; i--){
//   aux += palabra[i]
// }

// if (aux === palabra) {
//   console.log("si")
// }else{
//   console.log("nariz de perro gris")
// }


for(let i = 0; i < palabra.length; i++){
  let rev = palabra.length-1 -i;
  if (palabra[i] !== palabra[rev]) {
    console.log("no es palindromo");
    validacion = false;
  }
}

if (validacion === true) {
  console.log("es palindromo")
}









