document.getElementById("form-usuario").addEventListener("submit", function (event) {
    event.preventDefault();
    let formValido = true;

    const nomeCompleto = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const dataNascimento = document.getElementById("data-nascimento");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmar-senha");
    const endereco = document.getElementById("endereco");
    const telefone = document.getElementById("telefone");
    const bairro = document.getElementById("bairro");
    const numero = document.getElementById("numero");
    const cep = document.getElementById("cep");
    const estado = document.getElementById("estado");
    const cidade = document.getElementById("cidade");
    const perfil = document.getElementById("perfil");

    if (nomeCompleto.value.length < 5) {
        alert("Nome completo deve ter mais de 5 caracteres");
        formValido = false;
    }

    if (cpf.value.length !== 11) {
        alert("CPF deve ter 11 caracteres");
        formValido = false;
    }

    if (dataNascimento.value === "") {
        alert("Data de nascimento deve ser preenchida");
        formValido = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email.value)) {
        alert("Email inválido");
        formValido = false;
    }

    const regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&@#]).{6,}$/;
    if (!regexSenha.test(senha.value)) {
        alert("A senha deve ter pelo menos 6 caracteres, uma letra maiúscula, uma minúscula, um número e um símbolo.");
        formValido = false;
    }

    if (senha.value !== confirmarSenha.value) {
        alert("As senhas não coincidem");
        formValido = false;
    }

    if (endereco.value.length < 3) {
        alert("Endereço deve ter mais de 3 caracteres");
        formValido = false;
    }

    if (telefone.value.length < 10 || telefone.value.length > 11) {
        alert("Telefone deve ter entre 10 e 11 caracteres");
        formValido = false;
    }

    if (bairro.value.length < 3) {
        alert("Bairro deve ter mais de 3 caracteres");
        formValido = false;
    }

    if (numero.value.length < 1) {
        alert("Número deve ser preenchido");
        formValido = false;
    }

    if (cep.value.length !== 8) {
        alert("CEP deve ter 8 caracteres");
        formValido = false;
    }

    if (estado.value === "") {
        alert("Estado deve ser preenchido");
        formValido = false;
    }

    if (cidade.value.length < 3) {
        alert("Cidade deve ter mais de 3 caracteres");
        formValido = false;
    }

    if (formValido) {
        // Criar objeto com os dados do usuário
        const usuario = {
            nome: nomeCompleto.value,
            cpf: cpf.value,
            dataNascimento: dataNascimento.value,
            email: email.value,
            senha: senha.value, // ⚠️ Não seguro em app real, apenas para fins de estudo
            endereco: endereco.value,
            telefone: telefone.value,
            bairro: bairro.value,
            numero: numero.value,
            cep: cep.value,
            estado: estado.value,
            cidade: cidade.value,
            perfil: perfil.value
        };

        salvarUsuario(usuario);

        alert("Cadastro realizado com sucesso!");

        setTimeout(() => {
            window.location.href = "../login/paginaLogin.html";
        }, 1500);
    }
});



// Salva um novo usuário no localStorage
function salvarUsuario(usuario) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

window.onclick = function (event) {
    if (!event.target.matches('.login-btn img')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Logout
function logout() {
    alert("Você saiu com sucesso!");
    window.location.href = "../index.html";
}


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
        console.error("Erro: Elementos do menu sanduíche (.menu-sanduiche, .menu-opcoes ou span) não encontrados. Verifique seu HTML.");
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



// editar cadastro

const modoEdicao = localStorage.getItem("usuarioLogado") ? true : false;

// Função para editar o cadastro do usuário

// Ao carregar a página, preenche os campos com os dados do usuário
window.onload = function () {
  const emailLogado = localStorage.getItem("usuarioLogado");
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find(user => user.email === emailLogado);

  if (usuario) {
    document.getElementById("nome").value = usuario.nome || "";
    document.getElementById("cpf").value = usuario.cpf || "";
    document.getElementById("data-nascimento").value = usuario.dataNascimento || "";
    document.getElementById("telefone").value = usuario.telefone || "";
    document.getElementById("endereco").value = usuario.endereco || "";
    document.getElementById("bairro").value = usuario.bairro || "";
    document.getElementById("numero").value = usuario.numero || "";
    document.getElementById("cep").value = usuario.cep || "";
    document.getElementById("estado").value = usuario.estado || "";
    document.getElementById("cidade").value = usuario.cidade || "";
    document.getElementById("email").value = usuario.email || "";
    document.getElementById("perfil").value = usuario.perfil || "usuario";
    document.getElementById("senha").value = usuario.senha || "";
    document.getElementById("confirmar-senha").value = usuario.senha || "";
  } else {
    alert("Usuário não encontrado.");
  }
};


// Ao clicar em "Atualizar", salva os dados no localStorage
document.getElementById("form-usuario").addEventListener("submit", function (e) {
  e.preventDefault();

  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmar-senha").value;

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  const usuarioAtualizado = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    dataNascimento: document.getElementById("data-nascimento").value,
    telefone: document.getElementById("telefone").value,
    endereco: document.getElementById("endereco").value,
    bairro: document.getElementById("bairro").value,
    numero: document.getElementById("numero").value,
    cep: document.getElementById("cep").value,
    estado: document.getElementById("estado").value,
    cidade: document.getElementById("cidade").value,
    email: document.getElementById("email").value,
    perfil: document.getElementById("perfil").value,
    senha: senha
  };

  localStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));

  alert("Cadastro atualizado com sucesso!");
  // Se quiser, pode redirecionar o usuário:

  window.location.href = "../home/home.html";
});




// Função para sair da conta

    window.sairConta = function() {
        localStorage.removeItem("user");
        alert("Você saiu da sua conta.");
        window.location.href = "../login/paginaLogin.html";
    };

    if (!localStorage.getItem("user")) {
        localStorage.setItem("user", JSON.stringify({ id: 1, nome: "Usuário Exemplo" }));
    }