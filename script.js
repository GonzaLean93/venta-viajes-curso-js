import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener los elementos del DOM.

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// agregar evento click.
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        // REMOVER ACTIVO solo para el enlace actual
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('active');
        });

        // AGREGAR LA CLASE 'ACTIVE' AL ENLACE ACTUAL
        this.classList.add('active');

        // OBTENER EL CONTENIDO CORRESPONDIENTE SEGÚN EL ENLACE
        let contenido = obtenerContenido(this.textContent);

        // MOSTRAR EL CONTENIDO EN EL DOM
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;
    });
});

// Función para traer la información correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}