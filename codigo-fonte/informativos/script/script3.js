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

    const campoBusca = document.getElementById('campoBusca');
    const botaoBusca = document.getElementById('botaoBusca');
    const containerArtigos = document.getElementById('containerArtigos');
    const todosCardsArtigo = document.querySelectorAll('.card-artigo');

    const limiteNoticiasIniciais = 3;
    let todasNoticiasVisiveis = false;

    const btnVerMaisNoticias = document.getElementById('verMaisNoticias');

    function gerenciarExibicaoNoticias() {
        if (!todosCardsArtigo.length || !btnVerMaisNoticias) {
            return;
        }

        todosCardsArtigo.forEach((card, index) => {
            if (index >= limiteNoticiasIniciais) {
                card.classList.add('hidden-news');
            } else {
                card.classList.remove('hidden-news');
            }
        });

        if (todosCardsArtigo.length > limiteNoticiasIniciais) {
            btnVerMaisNoticias.style.display = 'block';
            btnVerMaisNoticias.textContent = 'Ver Mais Notícias';
            todasNoticiasVisiveis = false;
        } else {
            btnVerMaisNoticias.style.display = 'none';
        }
    }

    function alternarExibicaoNoticias() {
        if (!todasNoticiasVisiveis) {
            todosCardsArtigo.forEach(card => {
                card.classList.remove('hidden-news');
            });
            btnVerMaisNoticias.textContent = 'Ver Menos Notícias';
            todasNoticiasVisiveis = true;
        } else {
            gerenciarExibicaoNoticias();
        }
    }

    if (btnVerMaisNoticias) {
        btnVerMaisNoticias.addEventListener('click', alternarExibicaoNoticias);
    }

    const originalFiltrarArtigos = () => {
        if (!campoBusca || !todosCardsArtigo.length) {
            return;
        }

        const termoBusca = campoBusca.value.toLowerCase().trim();

        todosCardsArtigo.forEach(card => {
            const keywords = card.dataset.keywords ? card.dataset.keywords.toLowerCase() : '';
            const titulo = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
            const descricao = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '';

            if (termoBusca === '' || keywords.includes(termoBusca) || titulo.includes(termoBusca) || descricao.includes(termoBusca)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    };

    let filtrarArtigos = () => {
        const termoBusca = campoBusca.value.toLowerCase().trim();

        if (termoBusca === '') {
            gerenciarExibicaoNoticias();
        } else {
            originalFiltrarArtigos();
            if (btnVerMaisNoticias) {
                btnVerMaisNoticias.style.display = 'none';
            }
        }
    };

    if (botaoBusca) {
        botaoBusca.addEventListener('click', filtrarArtigos);
    }
    if (campoBusca) {
        campoBusca.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                filtrarArtigos();
            }
            filtrarArtigos();
        });
    }

    if (containerArtigos) {
        containerArtigos.addEventListener('click', (event) => {
            if (event.target.classList.contains('btn-compartilhar')) {
                const linkParaCompartilhar = event.target.dataset.link;
                const mensagem = `Confira este artigo importante sobre violência doméstica: ${linkParaCompartilhar}`;

                if (navigator.share) {
                    navigator.share({
                        title: 'Artigo Importante - Cora',
                        text: mensagem,
                        url: linkParaCompartilhar
                    }).then(() => {
                        console.log('Conteúdo compartilhado com sucesso!');
                    }).catch((error) => {
                        console.error('Erro ao compartilhar:', error);
                    });
                } else {
                    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}`, '_blank');
                }
            }
        });
    }

    window.excluirConta = function() {
        const confirmar = confirm("Tem certeza de que deseja excluir sua conta?");
        if (confirmar) {
            localStorage.removeItem("user");
            alert("Sua conta foi excluída com sucesso.");
            window.location.href = "../home/home.html";
        }
    };

    window.sairConta = function() {
        localStorage.removeItem("user");
        alert("Você saiu da sua conta.");
        window.location.href = "../login/paginaLogin.html";
    };

    if (!localStorage.getItem("user")) {
        localStorage.setItem("user", JSON.stringify({ id: 1, nome: "Usuário Exemplo" }));
    }

    gerenciarExibicaoNoticias();

});