// Variables para el simulador
let nombreUsuario;
let productoSeleccionado;
let cantidadProductos;
let totalCompra;

// Arrays
const productos = [
    { nombre: "Producto 1", precio: 50 },
    { nombre: "Producto 2", precio: 75 },
    { nombre: "Producto 3", precio: 100 }
];

// Función para mostrar productos disponibles
function mostrarProductos() {
    console.log("Productos Disponibles:");
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - Precio: $${producto.precio}`);
    });
}

// Función para seleccionar un producto
function seleccionarProducto() {
    let seleccionCorrecta = false;

    while (!seleccionCorrecta) {
        mostrarProductos(   );
        const index = parseInt(prompt("Seleccione el número del producto:"));

        // Verificar si el índice es válido
        if (index >= 1 && index <= productos.length) {
            productoSeleccionado = productos[index - 1];
            seleccionCorrecta = true; // Salir del bucle si la selección es correcta
        } else {
            console.error("Índice de producto no válido. Por favor, seleccione un producto válido.");
        }
    }
}

// Función para ingresar la cantidad de productos
function ingresarCantidad() {
    cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos a comprar:"));
}

// Función para realizar operaciones y mostrar resultado
function realizarCompra() {
    if (productoSeleccionado) {
        totalCompra = cantidadProductos * productoSeleccionado.precio;
        console.log(`Hola ${nombreUsuario}, has comprado ${cantidadProductos} ${productoSeleccionado.nombre}(s) por un total de $${totalCompra}. ¡Gracias por tu compra!`);
    } else {
        console.error("Error al procesar la compra. Producto no seleccionado.");
    }
}

// Función para iniciar el simulador
function iniciarSimulador() {
    nombreUsuario = prompt("Ingrese su nombre:");
    mostrarProductos();
    seleccionarProducto();
    ingresarCantidad();
    realizarCompra();
}

