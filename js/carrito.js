//Definicion de variables
const miCarrito = document.querySelector("#carrito"),
    resumenCarrito = document.querySelector("#resumenCarrito"),
    precioTotal = document.querySelector("#precioTotal");

let carrito, precioFinal;

//Cargar carrito

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"))
} else {
    carrito = [];
}

//Funciones

function añadirProd(id){
    let existeProd = carrito.some((producto) => producto.id === id);

    if (existeProd) {
        const producto = carrito.map((prod) => {
            if (prod.id === id) {
                prod.cant++
            }    
            console.log(carrito);
        })
    } else {
        const nuevo = productos.find((prod) => prod.id === id)
        carrito.push(nuevo);
        console.log(carrito);
    }
}

function guardarCarrito(el){
    return localStorage.setItem('carrito', JSON.stringify(el));
}

//Crear resumen de compra

function crearResumen (array) {
    let item;
    resumenCarrito.innerHTML="";
    contenedor.innerHTML = "";
        for (const itemProd of array) {
        item = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <h5>${itemProd.nombre.toUpperCase()}</h5>
            <span class="badge bg-primary rounded-pill">ID: ${itemProd.id}</span>
            <span class="badge bg-primary rounded-pill">Cantidad: ${itemProd.cant}</span>
            <span class="badge bg-secondary rounded-pill">Precio: ${itemProd.cant * itemProd.precio}</span>
        </li>
        `
        resumenCarrito.innerHTML += item;
    }
    const subtotal = carrito.reduce(
        (acc, prod) => acc + prod.cant * prod.precio, 0
    );
    precioTotal.innerHTML = '<h2>Total a Pagar: <span class="badge bg-secondary">$ '+subtotal+'</span></h2>';
}




//Eventos

document.querySelectorAll(".agregarProd").forEach((el) => {
    el.addEventListener('click', (e) => {
        const id = e.target.getAttribute("id");
        añadirProd(id);
        guardarCarrito(carrito)
    })
})

miCarrito.addEventListener('click', () => {
    crearResumen(carrito);
})