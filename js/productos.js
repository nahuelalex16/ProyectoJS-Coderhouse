
//Definicion de variables
const buscador = document.querySelector("#searchBox"),
    index = document.querySelector("#index"),
    contenedor = document.querySelector("#catalogo");

const productos = [
    {nombre: "chupetin", precio: 10, img: "chupetin.jpg", id: "PROD1", cant: 1},
    {nombre: "chicle", precio: 10, img: "chicles.png", id: "PROD2", cant: 1},
    {nombre: "alfajor", precio: 40, img: "alfajor.png", id: "PROD3", cant: 1},
    {nombre: "bombon", precio: 50, img: "bombon.png", id: "PROD4", cant: 1},
    {nombre: "caramelo", precio: 5, img: "caramelos.png", id: "PROD5", cant: 1},
    {nombre: "gomita", precio: 5, img: "gomitas.png", id: "PROD6", cant: 1}
]

//Funciones

function filtrarProductos (filtro) {
    let filtrado = productos.filter((el) =>{
        return el.nombre.includes(filtro);
    })
    return filtrado;
}

//Crear HTML

function crearHTML (array) {
    let card;
    contenedor.innerHTML = "";
    resumenCarrito.innerHTML="";
    precioTotal.innerHTML ="";
    for (const producto of array) {
        card = `
        <div class="col-lg-3 col-md-4 col-sm-12">
        <div class="card producto">
          <img src="./img/${producto.img}" alt="${producto.nombre}" class="card-img-top card-img-auto">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre.toUpperCase()}</h5>
            <p class="card-text">Precio: $ARG ${producto.precio}</p>
            <a href="#" class="btn btn-light agregarProd" id="${producto.id}"><img src="./img/carrito.png" alt="carrito" class="icon"> Agregar al carrito</a>
          </div>
        </div>
      </div>
        `
        contenedor.innerHTML += card;
    }
}

//Llamar crearHTML
crearHTML(productos);


//Eventos

buscador.addEventListener("input", () =>{
    let filtro = filtrarProductos(buscador.value);
    console.log(filtro);
    crearHTML(filtro);
})


index.addEventListener('click', () => {
    crearHTML(productos)
    buscador.value = "";
});