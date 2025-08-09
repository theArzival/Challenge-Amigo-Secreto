// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear el array que contendra la lista de amigos
let amigos = [];
let amigoTemp;
let lista;

//Funcion para agregar AMIGOS
function agregarAmigo() {
    //Obtengo el elemento para poder controlarlo
    amigoTemp = document.getElementById("amigo");
    //Verifico que el valor del inputo no sea nulo
    if (amigoTemp.value == "") {
        alert("Por favor, inserte un nombre");
    } else {
        //Agrego el valor del input a la lista
        amigos.push(amigoTemp.value);
        //Dejo en blanco el input
        amigoTemp.value="";
        actualizarListaAmigos();
    }

}

//Actualizar Lita de AMIGOS
function actualizarListaAmigos(){
    //Obtengo lista
    lista=document.getElementById("listaAmigos");
    //Limpio la lista
    lista.innerHTML="";
    for (let index = 0; index < amigos.length; index++) {
        lista.innerHTML+=`<li>${amigos[index]}</li>`;
    }
    
}

//Sortear Amigos
function sortearAmigo(){
    //Obtengo el elemento para poder controlarlo
    amigoTemp = document.getElementById("amigo");
    //Verifico que el la lista no este vacia
    if (amigos.length<=0) {
        alert("Por favor, inserte un nombres");
    } else {
        //Genero un indice aleatorio
        let indiceAleatorio= Math.floor(Math.random()*amigos.length);
        //Obtengo el ul donde mostraré resultado
        let resultado=document.getElementById("resultado");
        //Muestro el ganador
        resultado.innerHTML=amigos[indiceAleatorio];
    }
}