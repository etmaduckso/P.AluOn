alert('Bem vido ao jogo N° Secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//WHILE --> É USADO PARA REPÉTIR A OPERAÇÃO ENQUANTO O RESULTADO OU A CONDIÇÃO DA FUNÇÃO NÃO FOR ATINGIDO.

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // Condição para validar a escolha do número secreto no prompt.

    if (chute == numeroSecreto) {
       break;
    }
    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        }
        else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //No ALERT do IF foi inserido um contador de tentativas onde será evidenciado quantas tentativas foram realizadas até o acerto do N°.S --> Esse é o cod. para inserir o contador (tentativas = tentativas +1) a baixo a forma simplificada.
        tentativas++;
    }
    //Template Strings - usando o sinal de crase (`) e o sinal de cifrão ($) seguido de ({}) ele vai retornar o valor da variavel declarada como base para a função.
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//O CODIGO ACIMA É A VERSÃO SIMPLIFICADA DO CODIGO ABAIXO USANDO OPERADOR TERNÁRIO.

// if (tentativas > 1) {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// }
// else  alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);