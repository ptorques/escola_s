let url = "./ceps.json"
let cep = document.getElementById("cod")
let cidade = document.getElementById("cidade")
let estado = document.getElementById("estado")
let bairro = document.getElementById("bairro")
let país = document.getElementById("país")


function busca(){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for(let cep of data.ceps){
                if (cep.codigo == cod.value) {
                    cidade.value = cep.cidade
                    estado.value = cep.estado
                    bairro.value = cep.bairro
                    país.value = cep.pais
                    break
                }
            }
        })
}

document.getElementById("srch").addEventListener("click", busca)