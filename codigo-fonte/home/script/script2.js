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
        iconeSpan.style.fontSize = '40px'; // <<< MUDANÇA: Aumentei o 'X'
        iconeSpan.style.lineHeight = '0.8'; // Ajusta alinhamento do X
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
      console.error("Erro: Elementos .menu-sanduiche, .menu-opcoes ou span não encontrados.");
  }
});