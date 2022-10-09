// Exercício 1
console.log("---------------------------------------EXERCÍCIO 1---------------------------------------");
nomes = ["Mario", "Lara", "Julia", "Jorge", "Ronaldo"]

for (i = 0; i < nomes.length; i++){
    console.log("Nome do funcionário:", nomes[i]);
}

//Exercício 2
console.log("---------------------------------------EXERCÍCIO 2---------------------------------------");
salarios_nomes = [[3876.80, "Mario Freitas"], [1433.00, "Lara Borges"], [4129.15, "Julia Schmidt"], [2620.50, "Jorge Muniz"], [5088.00, "Ronaldo Nunes"], [9151.00, "Alex Casanas"], [1079.54, "Cleyton Fernandes"], [8792.25, "Lívia Miranda"]]

for (let i = 0; i < salarios_nomes.length; i++) {
    console.log("Nome do funcionário:", salarios_nomes[i][1]);
    console.log("Salário:", salarios_nomes[i][0], "\n");
}

// Exercício 3
console.log("---------------------------------------EXERCÍCIO 3---------------------------------------");
booleans = [(Math.random() * 100 > 50), (Math.random() * 10 > Math.PI), (33 * (Math.random() * 10) > 20 * (Math.random() * 10)), (2**(Math.random() * 10) > 256)]

for (i = 0; i < booleans.length; i++){
    console.log("Resultado da comparação:", booleans[i]);
}

// Exercício 4
console.log("---------------------------------------EXERCÍCIO 4---------------------------------------");
salarios_horas = []

for (let i = 0; i < salarios_nomes.length; i++) {
    salarios_horas.push([salarios_nomes[i][1], salarios_nomes[i][0], ((Math.random() * 100) * 4).toFixed(0)])
    salarios_horas[i].push((salarios_horas[i][1] / salarios_horas[i][2]).toFixed(2))
}

for (let i = 0; i < salarios_nomes.length; i++) {
    console.log("Nome do funcionário:", salarios_horas[i][0]);
    console.log("Salário p/ mês:", salarios_horas[i][1]);
    console.log("Horas trabalhadas no mês:", salarios_horas[i][2]);
    console.log("Salário por hora:", salarios_horas[i][3], "\n");
}

//Exercício 5
console.log("---------------------------------------EXERCÍCIO 5---------------------------------------");

matriz_produtos = [["Leite: "], ["Dúzia de ovos: "], ["Café: "], ["Abacate: "], ["Saco de arroz: "]]

valor_leite = 3.99
valor_ovos = 7.50
valor_cafe = 22
valor_abacate = 5.25
valor_arroz = 6


for (i = 0; i < matriz_produtos.length; i++) {
    switch (i) {
        case 0:
            matriz_produtos[i].push(valor_leite, (valor_leite * 0.95).toFixed(2))
            break;
        case 1:
            matriz_produtos[i].push(valor_ovos, (valor_ovos * 0.95).toFixed(2))
            break;
        case 2:
            matriz_produtos[i].push(valor_cafe, (valor_cafe * 0.95).toFixed(2))
            break;
        case 3:
            matriz_produtos[i].push(valor_abacate, (valor_abacate * 0.95).toFixed(2))
            break;
        case 4:
            matriz_produtos[i].push(valor_arroz, (valor_arroz * 0.95).toFixed(2))
            break;
        default:
            break;
    }
}

for (i = 0; i < matriz_produtos.length; i++) {
    console.log(matriz_produtos[i]);
}

//Exercício 6
console.log("---------------------------------------EXERCÍCIO 6---------------------------------------");

matriz_diagonal_multiplicada = []

for (let i = 0; i < 3; i++) {
    matriz_diagonal_multiplicada.push([(Math.random() * 10).toFixed(2), (Math.random() * 10).toFixed(2), (Math.random() * 10).toFixed(2)])
}

console.log("Matriz original: ");
for (let i = 0; i < 3; i++) {
    console.log("|", matriz_diagonal_multiplicada[i][0], matriz_diagonal_multiplicada[i][1], matriz_diagonal_multiplicada[i][2], "|");
}

console.log("\nMatriz multiplicada: ");
for (let i = 0; i < 3; i++) {
    matriz_diagonal_multiplicada[i][i] *= 2
    console.log("|", matriz_diagonal_multiplicada[i][0], matriz_diagonal_multiplicada[i][1], matriz_diagonal_multiplicada[i][2], "|");
}

//Exercício 7
console.log("---------------------------------------EXERCÍCIO 7---------------------------------------");

matriz_determinante = []

for (let i = 0; i < 2; i++) {
    matriz_determinante.push([(Math.random() * 10).toFixed(2), (Math.random() * 10).toFixed(2)])
}

console.log("Matriz: ");
for (let i = 0; i < 2; i++) {
    console.log("|", matriz_determinante[i][0], matriz_determinante[i][1], "|");
}

let determinante = matriz_determinante[0][0] * matriz_determinante[1][1] -  matriz_determinante[0][1] * matriz_determinante[1][0]
console.log("\nDeterminante: ", determinante.toFixed(2));