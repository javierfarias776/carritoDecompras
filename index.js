const contenedor = document.getElementById("contenedor");
const verCarrito = document.getElementById("contenedor2");
const modalContainer = document.getElementById("modalContainer");
const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 1200 },
  { id: 3, nombre: "gorra", precio: 1300 },
  { id: 4, nombre: "zapato", precio: 1400 },
];
const botonCarrito = document.getElementById("botonCarrito");

console.log("Objeto inicial de Productos: ", productos);

let carrito = []; // Variable Global

///////////////////// - bloque de codigo para agregar productos al carrito
// Crear div para cada uno de los productos
productos.forEach((producto) => {
  let div = document.createElement("div");

  div.innerHTML = `
<h1>id: ${producto.id}</h1>
<p> nombre: ${producto.nombre}</p>
<b>$${producto.precio}</b>
<button id="boton${producto.id}">agregar</button>`;

  contenedor.append(div);

  let comprar = document.getElementById(`boton${producto.id}`);

  comprar.addEventListener("click", () => {
    carrito.push(producto);
    console.log("EventListener producto agregado a Carrito: ", carrito);
  });
});
/////////////////////

console.log("Existe boton carrito ???", botonCarrito);

///////////////////// - Escuchar cuando clickeamos el boton carrito y agregar productos al carrito
botonCarrito.addEventListener("click", mostrarCarrito);
/////////////////////

// Mostrar productos en el carrito
function mostrarCarrito() {
    console.log("Boton carrito clickeado");
    console.log("Carrito: ", carrito);

    // Limpiar el contenedor verCarrito de productos
    verCarrito.innerHTML = "";
    console.log("HTML del contenedor2 limpio: ", verCarrito);


    carrito.forEach((producto) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <h1>id: ${producto.id}</h1>
        <p> nombre: ${producto.nombre}</p>
        <b>$${producto.precio}</b>`;
        verCarrito.append(div);
        console.log("Construyendo HTML con la variable carrito: ", carrito);
    });

    console.log("Carrito forEach: ", carrito);

    // Eliminar el contenedor totalCarrito si existe
    if (modalContainer.children.length > 0) {
        modalContainer.innerHTML = "";
    }

    // Calcular el total del carrito
    const totalCarrito = document.createElement("div");

    // calcular el total del carrito
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    totalCarrito.innerHTML = `TOTAL ${total}$`;

    modalContainer.append(totalCarrito);
}

