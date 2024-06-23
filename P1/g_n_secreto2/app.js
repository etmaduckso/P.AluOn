// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
//--------------------------------------------------------------------

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//--------------------------------------------------------------------

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//--------------------------------------------------------------------

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
//A declaração a baixo realiza a função que é mostrada acima.

exibirMensagemInicial();

//---------------------------------------------------------------------

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas.' : 'tentativa.';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        }
        else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        //tentativas = tentativas +1;
        tentativas++;
        limparCampo();
    }
}

//----------------------------------------------------------------------


// O comando (parseInt) quando usado com (Math.random) gera N° aleatorios inteiros sem esse comando  o (Math.random) gera numeros decimais de 0 a 1. 

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

//------------------------------------------------------------------------

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//-------------------------------------------------------------------------

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
