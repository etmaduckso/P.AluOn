alert('Bem vido ao jogo N° Secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute
//WHILE --> É USADO PARA REPÉTIR A OPERAÇÃO ENQUANTO O RESULTADO OU A CONDIÇÃO DA FUNÇÃO NÃO FOR ATINGIDO.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // Condição para validar a escolha do número secreto no prompt.
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
    }
    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        }
        else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    //Template Strings - usando o sinal de crase (`) e o sinal de cifrão ($) seguido de ({}) ele vai retornar o valor da variavel declarada como base para a função.
}
