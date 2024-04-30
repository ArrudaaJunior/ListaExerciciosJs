// Exibe uma mensagem de boas-vindas no console do navegador.
console.log('Bem vindo ao Programa!');

// Declara uma variável nome e atribui o valor 'Arruda' a ela.
let nome = 'Arruda';
// Exibe uma mensagem personalizada no console do navegador usando o valor da variável nome.
console.log(`olá, ${nome} !`);

// Declara uma variável nome2 e atribui o valor 'Júnior' a ela.
let nome2 = 'Júnior';
// Exibe um alerta personalizado na tela do navegador usando o valor da variável nome.
alert(`Olá, ${nome} !`);

// Solicita ao usuário que insira a linguagem de programação favorita e armazena a entrada na variável pergunta.
let pergunta = prompt('Qual é a linguagem de programação que você mais gosta?');
// Exibe a resposta do usuário no console do navegador.
console.log(pergunta);

// Declara duas variáveis, valor1 e valor2, e atribui os valores 20 e 10 a elas, respectivamente.
let valor1 = 20;
let valor2 = 10;
// Calcula a soma dos valores de valor1 e valor2 e armazena o resultado na variável resultado.
resultado = valor1 + valor2;
// Exibe a soma e os valores de valor1 e valor2 no console do navegador.
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// Calcula a diferença entre os valores de valor1 e valor2 e armazena o resultado na variável resultado1.
resultado1 = valor1 - valor2;
// Exibe a diferença e os valores de valor1 e valor2 no console do navegador.
console.log(`A diferença entre de ${valor1} e ${valor2} é igual a ${resultado1}`);

// Solicita ao usuário que insira sua idade e armazena a entrada na variável idade.
let idade = prompt('Digite a sua idade:');
// Verifica se a idade inserida é maior ou igual a 18 e exibe uma mensagem correspondente no console do navegador.
if (idade >= 18) {
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
}

// Solicita ao usuário que insira um número e armazena a entrada na variável numero.
let numero = prompt('Digite um número');
// Verifica se o número inserido é maior que zero, igual a zero ou menor que zero e exibe uma mensagem correspondente na tela do navegador.
if (numero > 0) {
    alert(`O número ${numero} é positivo`);
}
if (numero == 0) {
    alert(`Seu numero é ${numero}`);
} else {
    alert(`O número ${numero} é negativo`);
}

// Inicializa uma variável numero2 com o valor 1.
let numero2 = 1;
// Enquanto o valor de numero2 for menor ou igual a 10, exibe o valor de numero2 no console do navegador e incrementa numero2 em 1.
while (numero2 <= 10){
    console.log(numero2);
    numero2++;
}

// Declara uma variável nota e atribui o valor 8 a ela.
let nota = 8;
// Verifica se a nota é maior ou igual a 7 e exibe "Aprovado" ou "Reprovado" no console do navegador, conforme necessário.
if (nota >= 7){
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

// Gera um número aleatório entre 1 e 5 e exibe-o no console do navegador.
let numero3 = parseInt(Math.random() * 5 + 1);
console.log(numero3);

// Gera um número aleatório entre 1 e 10 e exibe-o no console do navegador.
let numero4 = parseInt(Math.random() * 10 + 1);
console.log(numero4);

// Gera um número aleatório entre 1 e 1000 e exibe-o no console do navegador.
let numero5 = parseInt(Math.random() * 1000 + 1);
console.log(numero5);