let conjunto_nomes = ["Jorge", "Marcos", "Marina", "Juliana", "Márcia", "Matheus", "Félix", "Antônio", "Raíssa", "Artur"]
let nomes = ""

for (i = 0; i < 10; i++) {
    nomes += conjunto_nomes[i]
}

let letras = nomes.length
console.log("O número de letras em todos os nomes é: ", letras);