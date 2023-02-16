let numeros = []

let n = 3
for (i = 0; i < n; i++){
    exponenciacao = 2**(n-i)
    numeros.push(exponenciacao)
}

console.log("Vetor original:" + numeros);


for (i = 0; i < n; i++){
    numeros[i] *= 2
}

console.log("Vetor dobrado: " + numeros);
