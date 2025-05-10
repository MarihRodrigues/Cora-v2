document.getElementById("form-usuario").addEventListener("submit", function (event) {
    // Previne o envio do formulário
    event.preventDefault();

    let formvalid = true;

    const nomeCompleto = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const dataNascimento = document.getElementById("data-nascimento");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmar-senha");

    

    if (nomeCompleto.value.length < 5) {
        alert("Nome completo deve ter mais de 5 caracteres");
        formvalid = false;
    }

    if (cpf.value.length < 11 || cpf.value.length > 11) {
        alert("CPF deve ter 11 caracteres");
        formvalid = false;
    }

    if (dataNascimento.value == "") {
        alert("Data de nascimento deve ser preenchida");
        formvalid = false;
    }

    if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email.value)) {
        alert("Email inválido");
        formValido = false;
    }

    const regexSenhaSimples = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[$&@#])(?:([0-9a-zA-Z$&@#])(?!\1)){8,}$/i;
    
    if (!regexSenhaSimples.test(senha.value)) {
        alert("A senha deve ter pelo menos 6 caracteres, uma letra maiúscula e um símbolo.");
        formValido = false;
    }

    if (senha.value !== confirmarSenha.value) {
        alert("As senhas não coincidem");
        formValido = false;
    }



    alert("Formulário enviado");
});

