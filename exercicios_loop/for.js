// factorial = 1

// for (i = 5; i > 0; i--) {
//     factorial *= i
// }

// console.log(factorial);

qtdealunos = 3
totalMedia = 0

for (i = 0; i < qtdealunos; i++) {
    let nota1 = Math.random() * 10
    let nota2 = Math.random() * 10
    let nota3 = Math.random() * 10

    let media = (nota1 + nota2 + nota3)/3
    totalMedia += media
    console.log("Notas [", nota1.toFixed(2), nota2.toFixed(2), nota3.toFixed(2), "], média:[", media.toFixed(2),"]");
}

totalMedia /= qtdealunos
console.log("Média de notas:", totalMedia.toFixed(2));