const Lproductos = [];

const form = document.querySelector("form");
const btnEnviar = document.getElementById("enviar");
const vNombre = document.getElementById("nombre");
const vPrecio = document.getElementById("precio");
const vCantidad = document.getElementById("cantidad");
const salida = document.getElementById("salida");

btnEnviar.addEventListener("click", function() {
    event.preventDefault();
    const nombre = vNombre.value;
    const precio = vPrecio.value;
    const cantidad = vCantidad.value;

    if (nombre === "" || precio === "" || cantidad === "") {
        alert("Todos los campos son requeridos");
        return;
    }

    Lproductos.push({
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    });

    vNombre.value = "";
    vPrecio.value = "";
    vCantidad.value = "";

    renderLista();
});

function renderLista() {
    const tabla = document.createElement("table");
    tabla.innerHTML = `
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acciones</th>
            </tr>
        </thead>
    `;

    Lproductos.forEach(function(producto) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>
                <button>Editar</button>
                <button>Eliminar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });

    salida.innerHTML = "";
    salida.appendChild(tabla);
}  
