let menuAbierto = document.querySelector(".menu-abierto")
let btnAbr = document.getElementById("btnAbr");
let btnCerr = document.getElementById("btnCerr")

function abrirMenu() {
    menuAbierto.classList.toggle("menu-abierto")
}

btnAbr.addEventListener("click", abrirMenu);
btnCerr.addEventListener("click", abrirMenu)