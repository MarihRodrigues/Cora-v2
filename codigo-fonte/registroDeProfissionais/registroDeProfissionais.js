document.getElementById("form-profissionais").addEventListener("submit", function (event) {
    // Previne o envio do formulário
    event.preventDefault();

    let formValido = true;

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

    if (especialidade.value == "") {
        alert("Especialidade deve ser preenchida");
        formValido = false;
    }

    if (formValido) {
        alert("Formulário enviado");
        // this.submit();  // Envia o formulário

        setTimeout(() => {
            window.location.href = "../login/paginaLogin.html";
        }, 2000); // 2000 milissegundos = 2 segundos
    }

});

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}
