//Declaracion de variables

const username = document.querySelector("#usernameLog"),
    password = document.querySelector("#passwordLog"),
    btnLogin = document.querySelector("#btnLogin");

//Funciones

function iniciarSesion(usuarios){
    let validacion = usuarios.find(usuario =>{
        return usuario.username == username.value && usuario.contraseña == password.value;
    });

    if (validacion){
        window.location.href = "/index.html";
    } else{
        document.querySelector("#alerta").innerText = "Error al iniciar sesión. Intentelo de nuevo.";
    }
}

function recuperarDatos(){
    let datos = JSON.parse(localStorage.getItem("usuarios"));
    return datos;
}

const usuariosGuardados = recuperarDatos();

//Eventos

btnLogin.addEventListener('click', (e) =>{
    e.preventDefault()

    iniciarSesion(usuariosGuardados);
})