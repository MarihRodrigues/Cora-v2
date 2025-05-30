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
 