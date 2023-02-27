// Questão 1

let Cha = {
    sabor: "Verde",
    xicaras: 3,
    quente: true,
}

// Questão 2

let PessoaQ2 = {
    nome: "Leonardo",
    mostrarNome() {
        console.log("Questão 2. \nNome do indivíduo: " + this.nome);
    },
}

PessoaQ2.mostrarNome()

// Questão 3

function PessoaQ3(nome, idade) {
    this.nome = nome
    this.idade = idade
}

let pessoa1 = new PessoaQ3("Rigoberto Almeida", 17)
let pessoa2 = new PessoaQ3("Joana Ceres", 32)
let maisVelho

pessoa1.idade > pessoa2.idade ? maisVelho = pessoa1 : pessoa1.idade < pessoa2.idade ? maisVelho = pessoa2 : maisVelho = "Idades Iguais"

console.log(
    "\nQuestão 3.\n" + 
    "Dados da primeira pessoa:\n" +
    "Nome: " + pessoa1.nome +
    "\nIdade: " + pessoa1.idade + 
    "\nDados da segunda pessoa:\n" +
    "Nome: " + pessoa2.nome +
    "\nIdade: " + pessoa2.idade + 
    "\nPessoa mais velha: " + maisVelho.nome
);

// Questão 4

function Func(nome, salario) {
    this.nome = nome
    this.salario = salario
}

let func1 = new Func("Rogério Gonzaga", 7800)
let func2 = new Func("Bárbara Streisand", 15250)

console.log(
    "\nQuestão 4.\n" + 
    "Dados da primeira pessoa:\n" +
    "Nome: " + func1.nome +
    "\nSalário: R$" + func1.salario.toFixed(2) + 
    "\nDados da segunda pessoa:\n" +
    "Nome: " + func2.nome +
    "\nSalário: R$" + func2.salario.toFixed(2) + 
    "\nMédia de salário: R$" + ((func1.salario + func2.salario)/2).toFixed(2)
);

// Questão 5

let Retangulo = {
    largura: 6,
    altura: 2, 
    area() {
        return this.largura*this.altura
    },
    perimetro() {
        return 2*(this.largura+this.altura)
    },
    diagonal() {
        return Math.sqrt(this.largura*this.largura+this.altura*this.altura)
    },
}

console.log(
    "\nQuestão 5.\n" + 
    "Entre a altura e largura do retângulo: \n" +
    "Altura: " + Retangulo.altura +
    "\nLargura: " + Retangulo.largura +
    "\nAREA = " + Retangulo.area() +
    "\nPERIMETRO = " + Retangulo.perimetro() +
    "\nDIAGONAL = " + Retangulo.diagonal().toFixed(2)
);