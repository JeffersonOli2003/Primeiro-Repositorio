let botaoSimples = document.getElementById("simples");

let meuTitulo = document.body;

let modoEscuro = true;

botaoSimples.onclick = trocaClasse;

function trocaClasse() {

    if (modoEscuro == true) {

        meuTitulo.classList.remove("modoClaro");
        meuTitulo.classList.add("modoEscuro");

        modoEscuro = false;

    } else {

        meuTitulo.classList.remove("modoEscuro");
        meuTitulo.classList.add("modoClaro");

        modoEscuro = true;
    }
}