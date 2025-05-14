// Função para alternar a visualização do menu dropdown
function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("show");
}

// Fecha o menu ao clicar fora dele
document.addEventListener("click", (event) => {
  const menu = document.getElementById("dropdownMenu");
  const loginBtn = document.querySelector(".login-btn");

  if (!loginBtn.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove("show");
  }
});

// Função para abrir e fechar a sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.right === "0px") {
    sidebar.style.right = "-250px";
  } else {
    sidebar.style.right = "0px";
  }
}