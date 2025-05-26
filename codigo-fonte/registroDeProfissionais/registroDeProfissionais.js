document.getElementById("form-profissionais").addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeCompleto = document.getElementById("nome");
    const especialidade = document.getElementById("especialidade");
    const email = document.getElementById("email");
    const endereco = document.getElementById("endereco");
    const telefone = document.getElementById("telefone");
    const bairro = document.getElementById("bairro");
    const numero = document.getElementById("numero");
    const cep = document.getElementById("cep");
    const estado = document.getElementById("estado");
    const cidade = document.getElementById("cidade");

    let formValido = true;

    if (nomeCompleto.value.length < 5) {
        alert("Nome completo deve ter mais de 5 caracteres");
        formValido = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email.value)) {
        alert("Email inválido");
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

    if (especialidade.value === "") {
        alert("Especialidade deve ser preenchida");
        formValido = false;
    }

    if (formValido) {
        const novoProfissional = {
            nome: nomeCompleto.value,
            especialidade: especialidade.value,
            email: email.value,
            endereco: endereco.value,
            telefone: telefone.value,
            bairro: bairro.value,
            numero: numero.value,
            cep: cep.value,
            estado: estado.value,
            cidade: cidade.value,
        };

        salvarProfissional(novoProfissional);

        alert("Cadastro realizado com sucesso!");

        setTimeout(() => {
            window.location.href = "../login/paginaLogin.html";
        }, 1500);
    }
});

function salvarProfissional(profissional) {
    let lista = JSON.parse(localStorage.getItem("profissionais")) || [];
    lista.push(profissional);
    localStorage.setItem("profissionais", JSON.stringify(lista));
}


// Sidebar e dropdown
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("ativo");
}

function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("show");
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

  const menuToggleDiv = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const iconeSpan = document.querySelector('.menu-toggle span');

  if (menuToggleDiv && sidebar && iconeSpan) {

    menuToggleDiv.addEventListener('click', function(event) {
      event.stopPropagation();
      sidebar.classList.toggle('ativo');
      menuToggleDiv.classList.toggle('ativo');

      if (sidebar.classList.contains('ativo')) {
        iconeSpan.innerHTML = '&times;';
        iconeSpan.style.fontSize = '40px'; // <<< MUDANÇA: Aumentei o 'X'
        iconeSpan.style.lineHeight = '0.8'; // Ajusta alinhamento do X
      } else {
        iconeSpan.innerHTML = '&#9776;';
        iconeSpan.style.fontSize = '30px';
        iconeSpan.style.lineHeight = '1';
      }
    });

      sidebar.addEventListener('click', function(event) {
    event.stopPropagation();
});


document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !menuToggleDiv.contains(event.target)) {
        if (sidebar.classList.contains('ativo')) {
            sidebar.classList.remove('ativo');
            menuToggleDiv.classList.remove('ativo');
            iconeSpan.innerHTML = '&#9776;';
            iconeSpan.style.fontSize = '30px'; 
            iconeSpan.style.lineHeight = '1';
        }
    }
});


  } else {
      console.error("Erro: Elementos .menu-toggle, .sidebar ou span não encontrados.");
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
  window.location.href = "../index.html";
}

