document.addEventListener('DOMContentLoaded', function() {

  const menuSanduicheDiv = document.querySelector('.menu-sanduiche');
  const menuLista = document.querySelector('.menu-opcoes');
  const iconeSpan = document.querySelector('.menu-sanduiche span');

  if (menuSanduicheDiv && menuLista && iconeSpan) {

    menuSanduicheDiv.addEventListener('click', function(event) {
      event.stopPropagation();
      menuLista.classList.toggle('ativo');
      menuSanduicheDiv.classList.toggle('ativo');

      if (menuLista.classList.contains('ativo')) {
        iconeSpan.innerHTML = '&times;';
        iconeSpan.style.fontSize = '40px'; 
        iconeSpan.style.lineHeight = '0.8'; 
      } else {
        iconeSpan.innerHTML = '&#9776;';
        iconeSpan.style.fontSize = '30px';
        iconeSpan.style.lineHeight = '1';
      }
    });

    menuLista.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    document.addEventListener('click', function() {
        if (menuLista.classList.contains('ativo')) {
            menuLista.classList.remove('ativo');
            menuSanduicheDiv.classList.remove('ativo');
            iconeSpan.innerHTML = '&#9776;';
            iconeSpan.style.fontSize = '30px'; 
            iconeSpan.style.lineHeight = '1';
        }
    });

  } else {
      console.error("Erro: Elementos .menu-sanduiche, .menu-opcoes ou span não encontrados.");
  }
});

function excluirConta() {
  const emailUsuarioLogado = localStorage.getItem("usuarioLogado");

  if (!emailUsuarioLogado) {
    alert("Nenhum usuário logado.");
    return;
  }

  // Confirmação
  const confirmacao = confirm("Tem certeza que deseja excluir sua conta? Essa ação não poderá ser desfeita.");
  if (!confirmacao) return;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Remove o usuário da lista
  usuarios = usuarios.filter(usuario => usuario.email !== emailUsuarioLogado);

  // Atualiza o localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Remove a sessão do usuário
  localStorage.removeItem("usuarioLogado");

  alert("Conta excluída com sucesso!");

  // Redireciona para a página inicial
  window.location.href = "../home/home.html";
}

// Função para sair da conta
function sairConta() {
  localStorage.removeItem("user"); 
  alert("Você saiu da sua conta.");
  window.location.href = "../login/paginaLogin.html";
}

// Exemplo de simulação de usuário logado (opcional)
if (!localStorage.getItem("user")) {
  localStorage.setItem("user", JSON.stringify({ id: 1, nome: "Usuário Exemplo" }));
}