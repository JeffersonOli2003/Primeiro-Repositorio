/* ==========================================================
   1. TROCA DE TEMA (claro / escuro)
   ========================================================== */
const raiz = document.documentElement;
const botaoTema = document.getElementById("theme-toggle");

function atualizarBotao() {
    const escuro = raiz.getAttribute("data-theme") === "dark";
    // Mostra o ícone da ação disponível: no escuro, o sol; no claro, a lua
    botaoTema.textContent = escuro ? "☀️" : "🌙";
    botaoTema.setAttribute(
        "aria-label",
        escuro ? "Mudar para o tema claro" : "Mudar para o tema escuro"
    );
}

botaoTema.addEventListener("click", () => {
    const novoTema = raiz.getAttribute("data-theme") === "dark" ? "light" : "dark";
    raiz.setAttribute("data-theme", novoTema);
    try {
        localStorage.setItem("tema", novoTema);
    } catch (e) {}
    atualizarBotao();
});

atualizarBotao();


/* ==========================================================
   2. DESTACA NO MENU A SEÇÃO QUE ESTÁ NA TELA
   ========================================================== */
const links = document.querySelectorAll(".nav-list a");
const secoes = document.querySelectorAll("main section[id]");

const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                links.forEach((link) => {
                    const ativo = link.getAttribute("href") === "#" + entrada.target.id;
                    link.setAttribute("aria-current", ativo ? "true" : "false");
                });
            }
        });
    },
    { rootMargin: "-45% 0px -50% 0px" }
);

secoes.forEach((secao) => observador.observe(secao));