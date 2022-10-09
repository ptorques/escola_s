frutas = ["uva", "maçã", "pera", "laranja", "bergamota", "mimosa", "ponkan"]

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let i = frutas.length - 1; i >= 0; i--) {
    console.log(frutas[i]);
}

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[frutas.length - 1 - i]);
}