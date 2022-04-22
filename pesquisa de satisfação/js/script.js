document.getElementById("btn_send").addEventListener("click", score)

function score(){
    let resposta1 = parseInt(document.querySelector(`input[type="radio"][name=pergunta1]:checked`).value)
    let resposta2 = parseInt(document.querySelector(`input[type="radio"][name=pergunta2]:checked`).value)
    let resposta3 = parseInt(document.querySelector(`input[type="radio"][name=pergunta3]:checked`).value)
    let resposta4 = parseInt(document.querySelector(`input[type="radio"][name=pergunta4]:checked`).value)
    let resposta5 = parseInt(document.querySelector(`input[type="radio"][name=pergunta5]:checked`).value)
    let resposta6 = parseInt(document.querySelector(`input[type="radio"][name=pergunta6]:checked`).value)
    let resposta7 = parseInt(document.querySelector(`input[type="radio"][name=pergunta7]:checked`).value)
    let resposta8 = parseInt(document.querySelector(`input[type="radio"][name=pergunta8]:checked`).value)

    let pontos = resposta1 + resposta2 + resposta3 + resposta4 + resposta5 + resposta6 + resposta7 + resposta8 

    document.getElementById("pontuaçao").innerText = pontos + "/40 pontos de satisfação. \n Obrigado por responder à nossa pesquisa!"
}