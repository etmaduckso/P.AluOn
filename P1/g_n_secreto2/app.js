// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas.' : 'tentativa.';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
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

    }
}

// O comando (parseInt) quando usado com (Math.random) gera N° aleatorios inteiros sem esse comando  o (Math.random) gera numeros decimais de 0 a 1. 

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}