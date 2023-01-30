//Definicion de variables
const miCarrito = document.querySelector("#carrito"),
    resumenCarrito = document.querySelector("#resumenCarrito"),
    precioTotal = document.querySelector("#precioTotal"),
    quitarProd = document.querySelectorAll(".quitarProd"),
    agregarProd = document.querySelectorAll(".agregarProd");

let carrito, precioFinal;

//Cargar carrito

const checkCarrito = localStorage.getItem("carrito") ? true : false,
    cargarCarrito = () =>{
        carrito = JSON.parse(localStorage.getItem("carrito"))
    };

checkCarrito ?  cargarCarrito() : carrito = [];


//Funciones

//Agregar productos al carrito

function añadirProd(id){
    let existeProd = carrito.some((producto) => producto.id === id);

    const sumarProd = carrito.map((prod) => {
        prod.id === id ? prod.cant++ : true
    });

    const nuevo = productos.find((prod) => prod.id === id)

    function nuevoProd(nuevo){
        carrito.push(nuevo);
    }

    existeProd ? sumarProd : nuevoProd(nuevo);
    console.log(carrito);
    
}

//Quitar productos del carrito

function eliminarProd(id){
    let buscarProd = carrito.find((prod) => prod.id === id);

    const indexProd = carrito.indexOf(buscarProd);
    console.log(indexProd);

    carrito.splice(indexProd, 1);

}

//Guardar carrito en LocalStorage

function guardarCarrito(el){
    return localStorage.setItem('carrito', JSON.stringify(el));
}

//Crear resumen de compra

function crearResumen (array) {
    let item;
    resumenCarrito.innerHTML="";
    contenedor.innerHTML = "";
        for (const itemProd of array) {
        const {nombre, precio, id, cant} = itemProd;
        item = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <h5>${nombre.toUpperCase()}</h5>
            <span class="badge bg-primary rounded-pill">ID: ${id}</span>
            <span class="badge bg-primary rounded-pill">Cantidad: ${cant}</span>
            <span class="badge bg-secondary rounded-pill">Precio: ${cant * precio}</span>
            <a href="#" class="btn btn-danger quitarProd" id="${id}">Eliminar</a>
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

miCarrito.addEventListener('click', () => {
    crearResumen(carrito);
});


agregarProd.forEach((el) => {
    el.addEventListener('click', (e) => {
        const id = e.target.getAttribute("id");
        añadirProd(id);
        guardarCarrito(carrito);
    })
});

quitarProd.forEach((el) => {
    el.addEventListener('click', (e) => {
        const id = e.target.getAttribute("id");
        eliminarProd(id)
    })
});
