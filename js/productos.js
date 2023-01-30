
//Definicion de variables
const buscador = document.querySelector("#searchBox"),
    index = document.querySelector("#index"),
    contenedor = document.querySelector("#catalogo");

let productos;

//Funciones

const pedirProductos = async () => {
    const response = await fetch('/data/productos.json');
    const data = await response.json();

    productos = data;
}

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
        const {nombre, precio, img, id} = producto;
        card = `
        <div class="col-lg-3 col-md-4 col-sm-12">
        <div class="card producto">
          <img src="./img/${img}" alt="${nombre}" class="card-img-top card-img-auto">
          <div class="card-body">
            <h5 class="card-title">${nombre.toUpperCase()}</h5>
            <p class="card-text">Precio: $ARG ${precio}</p>
            <a href="#" class="btn btn-light agregarProd" id="${id}"><img src="./img/carrito.png" alt="carrito" class="icon"> Agregar al carrito</a>
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
})