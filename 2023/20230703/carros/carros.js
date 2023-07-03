let url = "./carros.json"
let placa = document.getElementById("placa")
let result = document.getElementById("result")

function busca(){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for(let carro of data.carros){
                if (carro.placa == placa.value) {
                    result.innerHTML = `
                    <img src="${carro.img}"> <br> <br> <br>
                    Placa: ${carro.placa} <br> <br>
                    Marca: ${carro.marca} <br> <br>
                    Modelo: ${carro.modelo} <br> <br>
                    Ano: ${carro.ano}`
                    break
                }
            }
        })
}

document.getElementById("srch").addEventListener("click", busca)