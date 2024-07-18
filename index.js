const contenedor = document.getElementById("contenedor")
const verCarrito= document.getElementById("contenedor2")
const modalContainer= document.getElementById("modalContainer")
const productos = [
    {id: 1, nombre : "camisa", precio:1000},
    {id: 2, nombre : "pantalon", precio:1200},
    {id: 3, nombre : "gorra", precio:1300},
    {id: 4, nombre : "zapato", precio:1400}
];


let carrito = [];

 productos.forEach((producto)=>{
let div = document.createElement("div");
div.innerHTML= `
<h1>id: ${producto.id}</h1>
<p> nombre: ${producto.nombre}</p>
<b>$${producto.precio}</b>
<button id="boton${producto.id}">agregar</button>`
contenedor.append(div);
    
 let comprar = document.getElementById(`boton${producto.id}`)
 comprar.addEventListener("click",()=>{
    carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
    });

    carrito.forEach(producto=>{
    let div = document.createElement("div")
    div.innerHTML= `
    <h1>id: ${producto.id}</h1>
    <p> nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>`
    verCarrito.append(div);

    console.log(carrito)
    })

    console.log(carrito)
    
    const total = carrito.reduce((acc, el)=> acc+ el.precio,0)
    const totalCarrito= document.createElement("div")
    totalCarrito.innerHTML=`${total}$`
    modalContainer.append(totalCarrito)
  })
 })
  
    

   
         
    

