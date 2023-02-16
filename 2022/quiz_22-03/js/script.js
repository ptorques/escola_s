var question1 = document.getElementById("pergunta1")
var question2 = document.getElementById("pergunta2")
var question3 = document.getElementById("pergunta3")
var question4 = document.getElementById("pergunta4")
var question5 = document.getElementById("pergunta5")
var question6 = document.getElementById("pergunta6")
var question7 = document.getElementById("pergunta7")
var question8 = document.getElementById("pergunta8")
var question9 = document.getElementById("pergunta9")
var question10 = document.getElementById("pergunta10")
var paragrafo = document.getElementById("pontuação")

function setPontos() {
    let resposta1 = question1.value
    let resposta2 = question2.value
    let resposta3 = question3.value
    let resposta4 = question4.value
    let resposta5 = question5.value
    let resposta6 = question6.value
    let resposta7 = question7.value
    let resposta8 = question8.value
    let resposta9 = question9.value
    let resposta10 = question10.value

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
    if (resposta4 === "Ásia") {
        pontos++
    }
    if (resposta5 === "Grã-Bretanha") {
        pontos++
    }
    if (resposta6 === "7") {
        pontos++
    }
    if (resposta7 === "Tuvalu") {
        pontos++
    }
    if (resposta8 === "República Popular Democrática da Coréia") {
        pontos++
    }
    if (resposta9 === "Iugoslávia") {
        pontos++
    }
    if (resposta10 === "Niger") {
        pontos++
    }

    if (pontos < 4) {
        frase = "Boa sorte da próxima vez!"
    }
    else if (pontos > 3 && pontos < 7) {
        frase = "Chegando lá!"
    }
    else if (pontos > 6 && pontos < 10) {
        frase = "Nada mal!"
    }
    else if (pontos === 10) {
        frase = "Muito bom!"
    }

    console.log(pontos);

    paragrafo.innerText = "Pontuação de " + document.forms["form_nome"]["nome"].value + ": " + pontos + "/10\n" + frase
}

function switchmenu(x) {
    if (x == 1) {
        document.getElementById("quizswitch").className = "active"
        document.getElementById("sobreswitch").className = "inactive"
        if (document.getElementById("quiz").className == "undisplayed"){
            document.getElementById("prompt").className = "displayed"
        }
        else {
            document.getElementById("prompt").className = "undisplayed"
        }
        document.getElementById("sobre").className = "undisplayed"
    }
    else {
        document.getElementById("sobreswitch").className = "active"
        document.getElementById("quizswitch").className = "inactive"
        document.getElementById("sobre").className = "displayed"
        document.getElementById("prompt").className = "undisplayed"
        document.getElementById("quiz").className = "undisplayed"
    }
}

function displayquiz() {
    let x = document.forms["form_nome"]["nome"].value;
    
    if (x == "") {
    alert("Nome deve ser preenchido")
    }
    else {
        alert("Nome registrado")
        document.getElementById("prompt").className = "undisplayed"
        document.getElementById("quiz").className = "displayed"
    }
}