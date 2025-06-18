// login.js (referencie no HTML)
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login");
    const inputs = form.querySelectorAll("#campos2");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = inputs[0].value.trim();
        const senha = inputs[1].value;

        if (!email || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

        if (usuarioEncontrado) {
            localStorage.setItem("usuarioLogado", email);
            alert("Login realizado com sucesso!");
            window.location.href = "../home/home.html";
        } else {
            alert("E-mail ou senha incorretos.");
        }
    });
});