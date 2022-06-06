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

    var imc =peso/altura;

    alert('el imc es de: ' + imc.toFixed(2));

}
