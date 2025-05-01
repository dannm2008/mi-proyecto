console.log("¡Script cargado correctamente!");
// Mostrar un mensaje cuando se cargue la página
window.addEventListener('DOMContentLoaded', () => {
    console.log("🌟 ¡La página ha cargado exitosamente, mojarrita! 💖");
});

// Puedes agregar más funciones acá, por ejemplo:
// Mostrar alerta cuando se da clic en un producto (como idea futura)
const productos = document.querySelectorAll('.producto');

productos.forEach(producto => {
    producto.addEventListener('click', () => {
        alert("Has seleccionado un producto ✨");
    });
});
