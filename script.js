(function () {
    const container = document.querySelector('.header-container');
    const botao = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu-principal');
    if (!container || !botao || !menu) return;

    const telaGrande = window.matchMedia('(min-width: 769px)');

    function definirMenu(aberto) {
        menu.classList.toggle('aberto', aberto);
        botao.setAttribute('aria-expanded', String(aberto));
        botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    }

    container.classList.add('menu-pronto');
    botao.hidden = false;

    botao.addEventListener('click', function () {
        definirMenu(!menu.classList.contains('aberto'));
    });

    menu.addEventListener('click', function (evento) {
        if (evento.target.closest('a')) definirMenu(false);
    });

    document.addEventListener('keydown', function (evento) {
        if (evento.key === 'Escape' && menu.classList.contains('aberto')) {
            definirMenu(false);
            botao.focus();
        }
    });

    document.addEventListener('click', function (evento) {
        if (menu.classList.contains('aberto') && !container.contains(evento.target)) {
            definirMenu(false);
        }
    });

    telaGrande.addEventListener('change', function (evento) {
        if (evento.matches) definirMenu(false);
    });
})();
