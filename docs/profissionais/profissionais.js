document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");
    const modalResultados = document.getElementById("modal-resultados");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const especialidade = document.getElementById("profissionais").value.trim().toLowerCase();
        const estado = document.getElementById("estado").value.trim().toLowerCase();
        const cidade = document.getElementById("cidade").value.trim().toLowerCase();

        const profissionais = JSON.parse(localStorage.getItem("profissionais")) || [];

        const resultados = profissionais.filter(p => {
            return (
                p.especialidade.toLowerCase().includes(especialidade) &&
                p.estado.toLowerCase().includes(estado) &&
                p.cidade.toLowerCase().includes(cidade)
            );
        });

        modalResultados.innerHTML = "";

        if (resultados.length > 0) {
            resultados.forEach(p => {
                const card = document.createElement("div");
                card.innerHTML = `
                    <strong>${p.nome}</strong><br>
                    Especialidade: ${p.especialidade}<br>
                    Telefone: ${p.telefone}<br>
                    Email: ${p.email}<br>
                    Endereço: ${p.endereco}, ${p.numero}, ${p.bairro}<br>
                    CEP: ${p.cep}<br>
                    Cidade: ${p.cidade} - ${p.estado}<br>
                    <hr>
                `;
                modalResultados.appendChild(card);
            });
        } else {
            modalResultados.innerHTML = "<p>Profissional não encontrado</p>";
        }

        modal.style.display = "block";
    });

    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

document.addEventListener('DOMContentLoaded', function(){

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

// Função para sair da conta

function sairConta() {
    // Remove os dados do usuário armazenados no localStorage
    localStorage.removeItem("usuario");
    // Redireciona para a página de login
    window.location.href = "../home/home.html";
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
            window.location.href = "../home/home.html";
};