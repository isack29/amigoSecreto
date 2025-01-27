// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado")

function agregarAmigo() {
    // Obtén el valor del input
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;
    
    // Valida que no esté vacío o nulo
    if (amigo == null || amigo.trim() === "") {
        alert("El nombre no puede ser vacío o nulo");
        return; // Sal del método para evitar continuar
    }

    // Verifica si el nombre ya existe en el array
    if (!amigos.includes(amigo)) {
        amigos.push(amigo); // Agrega el nombre al array
        alert("Amigo agregado con éxito!");
    } else {
        alert("No puedes agregar dos veces a la misma persona");
    }

    // Vacía el input
    inputAmigo.value = "";
    mostrarLista();
    resultado.innerHTML =  "";

}



function mostrarLista(){

    
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i]; // Asignar el texto
        listaAmigos.appendChild(nuevoElemento);
    }

}


function sortearAmigo(){
    if(amigos.length == 0){
        alert("No hay amigos agregados en la lista")
    }
    listaAmigos.innerHTML = "";
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = "El amigo secreto es: "+nombreSorteado;
    
}

