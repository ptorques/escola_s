histArray = []
desloc = document.getElementById("desloc")
tempo = document.getElementById("tempo")
resultado = document.getElementById("resultado")
historico = document.getElementById("historico")

window.addEventListener("load", () => {
    if (localStorage.getItem("historico") != null) {
        histArray = JSON.parse(localStorage.getItem("historico"))
    }
    histArray.forEach(v => {
        historico.value += v + "\n"
    });
})

document.getElementById("calcular").addEventListener("click", calcular = () => {

    if (desloc.value > 0 && tempo.value > 0) {
        resultado.value = (Math.round((parseFloat(desloc.value) / parseFloat(tempo.value)) * 100))/100 + " km/h"
        historico.value = ""
        histArray.push(resultado.value)
        localStorage.setItem("historico", JSON.stringify(histArray))
        histArray.forEach(v => {
            historico.value += v + "\n"
        });
    } else {
        alert("Insira um número válido")
    }
})
document.getElementById("limpar").addEventListener("click", limpar = () => {
    desloc.value = ""
    tempo.value = ""
    resultado.value = ""
})
