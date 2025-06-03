const botaoMobile = document.getElementById('menu');
const botaoTablet = document.getElementById('opcao-menu');
const listaMenuMobile = document.querySelector('.lista-menu');
const listaMenuTablet = document.querySelector('#lista-categorias');

botaoMobile.addEventListener('click', () => {
    listaMenuMobile.classList.toggle('ativo');
    botaoMobile.classList.toggle('ativo');
   
});

botaoTablet.addEventListener('click', () => {
    listaMenuTablet.classList.toggle('ativo');
    botaoTablet.classList.toggle('ativo');
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!botaoMobile.contains(event.target) && !listaMenuMobile.contains(event.target)) {
        listaMenuMobile.classList.remove('ativo');
        botaoMobile.classList.remove('ativo');
    }
    if (!botaoTablet.contains(event.target) && !listaMenuTablet.contains(event.target)) {
        listaMenuTablet.classList.remove('ativo');
        botaoTablet.classList.remove('ativo');
    }
});

