function calcular(a, p) {

    var imc =p/(a*=a);
    return imc.toFixed(2);
    
}
var nombre = prompt("INGRESE SU NOMBRE");
var edad = prompt("INGRESE SU EDAD");
var peso = prompt("INGRESE SU PESO EN KG");
var altura = prompt("INGRESE SU ALTURA EN METROS");
let IMC=calcular(altura,peso);
alert('El IMC es de: ' + IMC);
if (IMC<=18.5){

	console.log("NECESITAS SUBIR DE PESO")
    console.log("LA CANTIDAD DE GRASAS EN  GRAMOS QUE NECESITAS POR DIA  SON: " + (peso*=1))
    console.log("LA CANTIDAD DE CARBOHIDRATOS EN  GRAMOS QUE NECESITAS POR DIA SON: " + (peso*=5))
    console.log("LA CANTIDAD DE PROTEINAS EN  GRAMOS QUE NECESITAS POR DIA SON: " + (peso*=2))

}else if(IMC>=25){

	console.log("NECESITAS BAJAR DE PESO")
	console.log("LA CANTIDAD DE GRASAS EN  GRAMOS QUE NECESITAS POR DIA  SON: " + (peso*=0.7))
	console.log("LA CANTIDAD DE CARBOHIDRATOS EN  GRAMOS QUE NECESITAS POR DIA SON: " + (peso*=3))
    console.log("LA CANTIDAD DE PROTEINAS EN  GRAMOS QUE NECESITAS POR DIA SON: " + (peso*=0.8))

}else if(IMC>=18.6 && IMC<=24.9){
	console.log("TU IMC ESTA EN LOS LIMITES CORRECTOS;CONTINUA CON TU DIETA")
}
