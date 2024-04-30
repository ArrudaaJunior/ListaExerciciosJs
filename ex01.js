// Exibe uma mensagem de boas-vindas ao usuário quando o site é carregado.
alert('Boas vindas ao nosso site!');

// let nome = "Lua";
// let = idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;

// Solicita ao usuário que digite seu nome e sua idade.
let nome = prompt('Digite seu nome:');
let idade = prompt('Digite sua idade:');

// Verifica se o nome ou a idade não foram preenchidos pelo usuário.
if (nome === "" || idade === "") {
    // Se algum dos campos estiver vazio, exibe uma mensagem de erro.
    let mensagemDeErro = 'Erro! Preencha todos os campos.';
    alert(mensagemDeErro);
} 
// Verifica se a idade inserida pelo usuário é maior ou igual a 18 anos.
else if (idade >= 18) {
    // Se a idade for maior ou igual a 18, informa ao usuário que ele pode tirar a habilitação.
    alert('Pode tirar a habilitação.');
} 
// Caso a idade seja menor que 18 anos.
else {
    // Informa ao usuário que ele não tem idade suficiente para tirar a habilitação.
    alert('Você ainda não tem idade para tirar habilitação.');
}

