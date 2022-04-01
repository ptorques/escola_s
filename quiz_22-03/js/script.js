let question1 = document.querySelector("#pergunta1")
let question2 = document.querySelector("#pergunta2")
let question3 = document.querySelector("#pergunta3")
let question4 = document.querySelector("#pergunta4")
let question5 = document.querySelector("#pergunta5")
let question6 = document.querySelector("#pergunta6")
let question7 = document.querySelector("#pergunta7")
let question8 = document.querySelector("#pergunta8")
let question9 = document.querySelector("#pergunta9")
let question10 = document.querySelector("#pergunta10")
var paragrafo = document.querySelector("#pontuação")

function setPontos(){
    let resposta1 = question1.value
    let resposta2 = question2.value
    let resposta3 = question3.value
    let pontos = 0
    let frase = ""

    if (resposta1 === "Rússia") {
        pontos++
    }
    if (resposta2 === "República Dominicana") {
        pontos++
    }
    if (resposta3 === "Liechtenstein") {
        pontos++
    }
            
    if (pontos === 0) {
        frase = "Boa sorte da próxima vez!"
    }
    else if (pontos === 1) {
        frase = "Chegando lá!"
    }
    else if (pontos === 2) {
        frase = "Nada mal!"
    }
    else if (pontos === 3) {
        frase = "Muito bom!"
    }
            
    paragrafo.innerText = "Você conseguiu: " + pontos +"/10\n" + frase
}