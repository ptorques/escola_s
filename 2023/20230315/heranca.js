// Questão 1

// Dados do usuário

let nproduct = 3
let p1type = 'i'
let p2type = 'c'
let p3type = 'u'
let p1name = "Tênis"
let p2name = "Camiseta"
let p3name = "Calça"
let p1price = 240.55
let p2price = 40
let p3price = 30
let p1customs = 15
let p3fab = "03/02/2020"

// Código

class Product {
    constructor(type, name, price) {
        this.type = type
        this.name = name
        this.price = price
    }
}

class importedProduct extends Product {
    constructor (type, name, price, customs) {
        super(type, name, price)
        this.customs = customs
    }
}

class usedProduct extends Product {
    constructor (type, name, price, fabDate) {
        super(type, name, price)
        this.fabDate = fabDate
    }
}

let product1 = new importedProduct(p1type, p1name, p1price, p1customs)
let product2 = new Product(p2type, p2name, p2price)
let product3 = new usedProduct(p3type, p3name, p3price, p3fab)

// console.log(
//     `Produtos:\n${product1.name} R$${product1.price} (Taxa aduaneira: R$${product1.customs}) \n${product2.name} R$${product2.price} \n${product3.name} (usado) R$${product3.price} (Data de fabricação: ${product3.fabDate})`
// )



// Questão 2

class Animal {
    alterarNome = function (name) {
        this.name = name
    }
    alterarComprimento = function (length) {
        this.length = length
    }
    alterarPatas = function (paws) {
        this.paws = paws
    }
    alterarCor = function (colour) {
        this.colour = colour
    }
    alterarHabitat = function (habitat) {
        this.habitat = habitat
    }
    alterarVelocidade = function (speed) {
        this.speed = speed
    }
    Dados = function () {
        console.log(`Animal: \nNome: ${this.name}\nComprimento: ${this.length}cm\nPatas: ${this.paws}\nCor: ${this.colour}\nHabitat: ${this.habitat}\nVelocidade: ${this.speed}m/s`);
    }
    constructor(name, length, paws, colour, habitat, speed) {
        this.name = name
        this.length = length
        this.paws = paws
        this.colour = colour
        this.habitat = habitat
        this.speed = speed
    }
}

class Peixe extends Animal {
    paws = 0
    colour = "Cinza" 
    habitat = "Água"
    alterarCaracterístca = function (char) {
        this.char = char
    }
    Característica = function () {
        console.log(`Característica do peixe: ${this.char}`);
    }
    Dados = function () {
        console.log(`Peixe: \nNome: ${this.name}\nComprimento: ${this.length}cm\nPatas: ${this.paws}\nCor: ${this.colour}\nHabitat: ${this.habitat}\nVelocidade: ${this.speed}m/s \nCaracterística: ${this.char}`);
    }
    constructor(name, char, length, speed) {
        super(name, length, speed)
        this.char = char
    }
}

class Mamífero extends Animal {
    habitat = "Terra"
    alterarAlimento = function (food) {
        this.food = food
    }
    Alimento = function () {
        console.log(`Alimento do mamífero: ${this.food}`);
    }
    Dados = function () {
        console.log(`Peixe: \nNome: ${this.name}\nComprimento: ${this.length}cm\nPatas: ${this.paws}\nCor: ${this.colour}\nHabitat: ${this.habitat}\nVelocidade: ${this.speed}m/s \nAlimento: ${this.food}`);
    }
    constructor(name, food, length, paws, colour, speed) {
        super(name, length, paws, colour, speed)
        this.food = food
    }
}

let camel = new Animal("Camelo", 150, 4, "Amarelo", "Terra", 2)
let shark = new Peixe("Tubarão", "Barbatanas", 300, 1.5)
let canadianBear = new Mamífero("Urso-do-canadá", "Mel", 180, 4, "Vermelho", 0.5)

// camel.Dados()
// shark.Dados()
// canadianBear.Dados()