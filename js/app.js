// Variables
    const foto = document.querySelector('#foto');

    let fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg", "foto7.jpg", "foto8.jpg", "foto9.jpg", "foto10.jpg"];

// Eventos
eventListeners();
function eventListeners(){

    document.addEventListener('DOMContentLoaded', pasarFoto);

}

// Funciones
function pasarFoto(){

    let cantidadFotos = fotos.length;

    let numeroFoto = Math.floor(Math.random() * cantidadFotos);

    /* Otra forma de acceder a las imágenes es desde el objeto images[], que tiene acceso a todas las imágenes de la página.
    Para acceder a las imágenes de un id en concreto images[id], en este caso images[foto]
    document.images['foto'].src = "assets/img/" + fotos[numeroFoto];
    */

    foto.src = "assets/img/" + fotos[numeroFoto];

    console.log(foto.src);

    setTimeout("pasarFoto()", 2500);
}