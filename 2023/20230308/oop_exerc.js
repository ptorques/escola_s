// Questão 1

class Ninja {
    constructor (nome) {
        this.name = nome
    }

    atirarShuriken() {
        console.log("Hya!");
    }
}

let ninja = new Ninja("Chipp Zanuff")

// Questão 2

ninja.shuriken = 5;

ninja.atirarShuriken = function() {
    if (this.shuriken <= 0) {
        console.log("Falhou");
    }
    else {
    console.log("Hya!");
    this.shuriken--
    }
}

// Questão 3

let inimigo = new Ninja("Jonas")
inimigo.vivo = true

ninja.atirarShuriken = function() {
    if (this.shuriken <= 0) {
        console.log("Falhou");
    }
    else {
    console.log("Hya!");
    this.shuriken--
    }
    inimigo.vivo = false
}

// Questão 4

let checar = function(obj1, obj2) {
    console.log(obj1 instanceof obj2);
}

// Questão 5

let lado = 10

let quadrado = {lado}

let triangulo_equilatero = {lado}

// Questão 6 

let caminhao = {
    rodas: 6, 
    cor: "vermelho",
    marca: "Iveco",
    placa: "POL-0110"
}

let {rodas, cor, marca, placa} = caminhao

// Questão 7

let numeroConta = 123456789
let nomeConta = "Carlos Amaral"
let saldoInicial = true
let valorSaldo = 650
let valorDeposito = 220
let valorSaque = 100

class Conta {
    constructor(numero, nome, valor) {
        this.numero = numero
        this.nome = nome
        this.valor = valor
    }
}

let criarConta = function() {
    console.log("Entre o número da conta: " + numeroConta + 
    "\nEntre o nome: " + nomeConta + 
    "\nHaverá depósito inicial (S/N)? " + saldoInicial + 
    "\nValor do depósito: " + valorSaldo
    );
    if (saldoInicial == false || valorSaldo < 0) valorSaldo = 0
}

criarConta()

const conta1 = new Conta(numeroConta, nomeConta, valorSaldo)

console.log(`\nDados da conta: \nNúmero da conta: ${conta1.numero}, Titular: ${conta1.nome}, Saldo: R$${(conta1.valor).toFixed(2)}`);



let deposito = function() {
    console.log("\nQuanto deseja depositar? " + valorDeposito);
    valorDeposito > 0 ? conta1.valor += valorDeposito : console.log("Valor não pode ser menor do que zero.");

    console.log(`Dados da conta: \nNúmero da conta: ${conta1.numero}, Titular: ${conta1.nome}, Saldo: ${(conta1.valor).toFixed(2)}`);
}

deposito()

let saque = function() {
    console.log("\nQuanto deseja sacar? " + valorSaque);
    valorSaque > 0 ? conta1.valor -= (valorSaque + 5) : console.log("Valor não pode ser menor do que zero.");

    console.log(`Dados da conta: \nNúmero da conta: ${conta1.numero}, Titular: ${conta1.nome}, Saldo: ${(conta1.valor).toFixed(2)}`);
}

saque()