let objeto = {
  key: "valor",
  saludo: ()=> { console.log("hola XD") },
  nombre: "angelo",
  edad: 28,
  email: "angelo@jelpmi.mx",
  batch: [4, 8, 9, 10, 15, 17, 18, 19, 20, 21, 22, 23],
  direccion:{
    calle: "agustin melgar",
    exterior: "44",
    colonia: "condesa"
  },
}
// for(let i = 0; i < objeto.batch.length; i++){
//   console.log( objeto.batch[i])
// }

for( let i in objeto.batch){
  console.log(objeto.batch[i]);
}

objeto.saludo()  

