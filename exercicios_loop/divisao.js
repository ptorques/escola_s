let numero_grande = Math.random() * 100000

console.log("Número inicial: ", numero_grande.toFixed(2))

for (i = 0; i < 5; i++) {
    numero_grande = numero_grande / 2
}

console.log("Número dividido: ", numero_grande.toFixed(2));