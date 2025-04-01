function parabens() {
    alert("Parabéns, você esta namorando comigo!");
}

function quePena() {
    alert("Que pena, você clicou em Não!");
}

function moverBotao() {
    const botaoNao = document.getElementById("nao");
    

    botaoNao.style.position = 'fixed'; 
    botaoNao.style.transition = 'left 0.10s, top 0.10s'; 

   
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;
    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;


    const maxX = larguraJanela - larguraBotao;
    const maxY = alturaJanela - alturaBotao;

 
    const novaPosX = Math.random() * maxX;
    const novaPosY = Math.random() * maxY;

    
    botaoNao.style.left = `${novaPosX}px`;
    botaoNao.style.top = `${novaPosY}px`;
}


const botaoNao = document.getElementById("nao");
botaoNao.addEventListener("mouseenter", moverBotao);