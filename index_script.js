// Función para mostrar/ocultar la barra lateral
document.getElementById("toggleSidebar").addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("-translate-x-full")) {
        sidebar.classList.remove("-translate-x-full");
    } else {
        sidebar.classList.add("-translate-x-full");
    }
});
// Detectar el día actual
let today = new Date();
let dayOfWeek = today.getDay();  // Devuelve un número entre 0 (Domingo) y 6 (Sábado)
let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

// Actualizar el título con el día
document.getElementById("titulo-dia").innerText = days[dayOfWeek];

// Seleccionar automáticamente el día en el select
document.getElementById("dia").value = days[dayOfWeek];

// Actualizar el título del edificio al cambiar el select
document.getElementById("edificio").addEventListener("change", function() {
    document.getElementById("titulo-edificio").innerText = this.value;
});

// Actualizar el título del día al cambiar el select
document.getElementById("dia").addEventListener("change", function() {
    document.getElementById("titulo-dia").innerText = this.value;
});
