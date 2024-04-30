// Solicita ao usuário que insira o dia da semana e armazena a entrada na variável diaDaSemana.
diaDaSemana = prompt('Que dia é hoje?');

// Verifica se o dia da semana inserido pelo usuário é igual a "Sábado" ou "Domingo".
// Nota: há um erro lógico nesta linha que será explicado no comentário seguinte.
if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo"){
    // Se o dia for "Sábado" ou "Domingo", exibe um alerta desejando um bom fim de semana.
    alert('Bom fim de semana!');
} else {
    // Se o dia não for "Sábado" ou "Domingo", exibe um alerta desejando uma boa semana.
    alert('Boa semana!');
}

numeroDigitado = prompt('Digite um número:')

numeroDigitado = parseFloat(numeroDigitado)

if (numeroDigitado < 0) {

    alert('O número digitado é negativo.');
} else {

    alert('O número digitado é positivo.');
}


// Definindo a pontuação inicial do jogador
let pontuacao = 0;

// Verificando se a pontuação é maior ou igual a 100
if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}


// Definindo o saldo da conta
let saldo = 500;

// Criando a mensagem usando uma template string para incluir o valor do saldo
let mensagem = `Seu saldo atual é de ${saldo} reais.`;

// Exibindo a mensagem para o usuário
alert(mensagem);


// Pedindo ao usuário que insira seu nome usando prompt
let nome = prompt('Digite seu nome:');

// Criando a mensagem de boas-vindas usando o nome inserido pelo usuário
let mensagemBoasVindas = `Olá, ${nome}! Bem-vindo ao nosso site.`;

// Mostrando um alerta de boas-vindas com o nome do usuário
alert(mensagemBoasVindas);