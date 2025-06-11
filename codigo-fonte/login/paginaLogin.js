document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;

  // Validação básica
  if (email === "" || senha === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Recuperar os usuários cadastrados do localStorage
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verificar se existe um usuário com e-mail e senha compatíveis
  const usuarioEncontrado = usuarios.find(user => user.email === email && user.senha === senha);

  if (usuarioEncontrado) {
    // Salvar info do login ativo
    localStorage.setItem("usuarioLogado", usuarioEncontrado.email);

    alert("Login realizado com sucesso!");

    // Redirecionar para página protegida (ex: página de denúncia)
    window.location.href = "../denuncia/paginaDenuncia.html";
  } else {
    alert("E-mail ou senha inválidos.");
  }
});

// Função para sair da conta

        function sairConta() {
            // Remove os dados do usuário armazenados no localStorage
            localStorage.removeItem("usuario");

            // Opcional: limpa todo o localStorage se quiser remover tudo
            // localStorage.clear();

            // Redireciona para a página de login
            window.location.href = "../login/paginaLogin.html";
        }

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
            window.location.href = "../index.html";
        }