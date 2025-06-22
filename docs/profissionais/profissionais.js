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