function changeName(){
    const nombre = prompt("¿Cómo te llamas?");
    document.getElementById("hola").innerHTML= `¡Hola ${nombre}!`;
}