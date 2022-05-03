
let salarios = []
let total = 0

for (i = 0; i < 5; i++) {
    salarios.push(Math.random() * 10000)
    total += salarios[i]
}

let media = total / 5

console.log(media.toFixed(2));