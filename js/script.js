let menuBoton = document.querySelector(".menu-boton");
let botonCerrar = document.querySelector(".boton-cerrar");
let navBar = document.querySelector(".navbar");

menuBoton.onclick = function() {
    menuBoton.style.opacity = "0";
    menuBoton.style.pointerEvents = "none";
    navBar.classList.add("active");
}
botonCerrar.onclick = function() {
    menuBoton.style.opacity = "1";
    menuBoton.style.pointerEvents = "auto";
    navBar.classList.remove("active");
}