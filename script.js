function toggleSidebar() {
    var sidebar = document.getElementById("div_menu");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}



function toggleLightDarkMode() {
    var body = document.body;
    var modeBtn = document.getElementById("light-dark-mode-btn");

    // Alterna entre os modos claro e escuro
    body.classList.toggle("light-mode");

    // Atualiza o texto do botão de acordo com o modo atual
    if (body.classList.contains("light-mode")) {
        modeBtn.textContent = "Modo: Claro";
    } else {
        modeBtn.textContent = "Modo: Escuro";
    }
}

// Define o estado inicial do texto do botão de acordo com o modo de cor da página ao carregar
document.addEventListener("DOMContentLoaded", function() {
    var body = document.body;
    var modeBtn = document.getElementById("light-dark-mode-btn");

    if (body.classList.contains("light-mode")) {
        modeBtn.textContent = "Modo: Claro";
    } else {
        modeBtn.textContent = "Modo: Escuro";
    }
});
