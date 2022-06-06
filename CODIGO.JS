function validar(){

    var peso=document.getElementById('peso').value;
    var estatura=document.getElementById('estatura').value;


if(peso=="" && estatura==""){

    document.getElementById('area').value="Error los dos campos estan en blanco";
    document.getElementById('peso').style.borderColor="red";
    document.getElementById('estatura').style.borderColor="red";

} else if(peso<1){

    document.getElementById('area').value="El campo peso tiene un numero negativo";
    document.getElementById('peso').style.borderColor="red";
    
} else if (estatura<1){

    document.getElementById('area').value="El campo estatura tiene un numero negativo";
    document.getElementById('estatura').style.borderColor="red";

} else if(isNaN(peso)){

    document.getElementById('area').value="Has introducido letras en el campo peso ";
    document.getElementById('peso').style.borderColor="red";

} else if(isNaN(estatura)){

    document.getElementById('area').value="Has introducido letras en el campo estatura";
    document.getElementById('estatura').style.borderColor="red";

} else {

    calcular(estatura,peso);

}
}

function calcular(altura, peso) {

    var IMC =peso/altura;

    alert('El IMC es de: ' + IMC.toFixed(2));
}
var nombre = prompt("INGRESE SU NOMBRE");
var edad = prompt("INGRESE SU EDAD");
var peso = prompt("INGRESE SU PESO EN KG");
var altura = prompt("INGRESE SU ALTURA EN METROS");
var IMC = peso/(altura*=altura)

if (IMC<=18.5){

	console.log("NECESITAS SUBIR DE PESO")
    console.log("LA CANTIDAD DE GRASAS EN  GRAMOS QUE NECESITAS POR DIA  SON: " + (peso*=1))
    console.log("LA CANTIDAD DE CARBOHIDRATOS EN  GRAMOS QUE NECESITAS POR DIA SON: " + (peso*=5))
    console.log("LA CANTIDAD DE PROTEINAS EN  GRAMOS QUE NECESITAS POR DIA SON: " + (peso*=2))

}

else if(IMC>=25){

	console.log("NECESITAS BAJAR DE PESO")
	console.log("LA CANTIDAD DE GRASAS EN  GRAMOS QUE NECESITAS POR DIA  SON: " + (peso*=0.7))
	console.log("LA CANTIDAD DE CARBOHIDRATOS EN  GRAMOS QUE NECESITAS POR DIA SON: " + (peso*=3))
    console.log("LA CANTIDAD DE PROTEINAS EN  GRAMOS QUE NECESITAS POR DIA SON: " + (peso*=0.8))

}
else if(IMC>=18.6 && IMC<=24.9){
	console.log("TU IMC ESTA EN LOS LIMITES CORRECTOS")
}
