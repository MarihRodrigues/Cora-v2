document.getElementById("form-usuario").addEventListener("submit", function (event) {
    // Previne o envio do formulário
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



    if (nomeCompleto.value.length < 5) {
        alert("Nome completo deve ter mais de 5 caracteres");
        formValido = false;
    }

    if (cpf.value.length < 11 || cpf.value.length > 11) {
        alert("CPF deve ter 11 caracteres");
        formValido = false;
    }

    if (dataNascimento.value == "") {
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

    if (cep.value.length < 8 || cep.value.length > 8) {
        alert("CEP deve ter 8 caracteres");
        formValido = false;
    }

    if (estado.value == "") {
        alert("Estado deve ser preenchido");
        formValido = false;
    }

    if (cidade.value.length < 3) {
        alert("Cidade deve ter mais de 3 caracteres");
        formValido = false;
    }

    alert("Formulário enviado");

    if (formValido) {
        // this.submit();  // Envia o formulário

        setTimeout(() => {
            window.location.href = "../login/paginaLogin.html";
        }, 2000); // 2000 milissegundos = 2 segundos
    }
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("show");
}

// Fecha o menu dropdown ao clicar fora dele
window.onclick = function(event) {
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

// Função para logout
function logout() {
    alert("Você saiu com sucesso!");
    // Redireciona para a página inicial após logout
    window.location.href = "../index.html";
}
