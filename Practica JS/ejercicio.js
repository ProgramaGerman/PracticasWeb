const personas = [
    {nombre : "German", apellido : "Gonzalez", edad : "21"},
    {nombre : "Luis", apellido : "Garcia", edad : "21"},
]

const formulario = document.getElementById("formulario").addEventListener("submit",() => {
    event.preventDefault();

    const nombreProducto = document.getElementById("nombreProducto").value
    const cantProducto = document.getElementById("cantProducto").value

    const tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0]
    const nuevaFila = tabla.insertRow();

    const cellNombreProducto = nuevaFila.insertCell(0)
    const cellcantProducto = nuevaFila.insertCell(1)

    cellNombreProducto.textContent = nombreProducto
    cellcantProducto.textContent = cantProducto

    document.getElementById("formulario").reset();
})