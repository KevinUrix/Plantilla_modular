// report_script.js

// Función para mostrar/ocultar la barra lateral
document.getElementById("toggleSidebar").addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("-translate-x-full")) {
        sidebar.classList.remove("-translate-x-full");
    } else {
        sidebar.classList.add("-translate-x-full");
    }
});

// Función para agregar un ticket
document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar el envío del formulario y la recarga de la página

    // Obtener los valores de los campos
    let salon = document.getElementById("salon").value;
    let fecha = document.getElementById("fecha").value;
    let descripcion = document.getElementById("descripcion").value;

    // Crear el cuadro del ticket
    let ticket = document.createElement("div");
    ticket.classList.add("bg-white", "p-4", "rounded-lg", "shadow-lg", "border", "border-gray-300", "flex", "flex-col", "space-y-4");

    // Agregar el contenido al ticket
    ticket.innerHTML = `
        <h3 class="font-semibold text-lg">Salón: ${salon}</h3>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Descripción:</strong> ${descripcion}</p>
        <button class="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg" onclick="removeTicket(this)">Eliminar Ticket</button>
    `;

    // Agregar el ticket al contenedor
    document.getElementById("ticketContainer").appendChild(ticket);

    // Limpiar el formulario después de agregar el ticket
    document.getElementById("ticketForm").reset();
});

// Función para eliminar un ticket
function removeTicket(button) {
    button.parentElement.remove();
}
