function search_price(opcao) {
    switch (opcao) {
        case "uva":
            document.getElementById("produto").innerText = "Uva"
            document.getElementById("preço").innerText = "Preço: R$3,89"
            document.getElementById("imagem").src = "./media/uvas.jpg"
            break;
        case "camiseta":
            document.getElementById("produto").innerText = "Camiseta"
            document.getElementById("preço").innerText = "Preço: R$25,00"
            document.getElementById("imagem").src = "./media/camistea.jpg"
            break;
        case "pera":
            document.getElementById("produto").innerText = "Pera"
            document.getElementById("preço").innerText = "Preço: R$2,50"
            document.getElementById("imagem").src = "./media/pera.jpeg"
            break;
        case "mel":
            document.getElementById("produto").innerText = "Mel"
            document.getElementById("preço").innerText = "Preço: R$9,50"
            document.getElementById("imagem").src = "./media/mel.jpg"
            break;
        case "escova":
            document.getElementById("produto").innerText = "Escova de dentes"
            document.getElementById("preço").innerText = "Preço: R$3,49"
            document.getElementById("imagem").src = "./media/escova.png"
            break;
        case "bolo":
            document.getElementById("produto").innerText = "Bolo de padaria"
            document.getElementById("preço").innerText = "Preço: R$16,99"
            document.getElementById("imagem").src = "./media/bolo.jpg"
            break;
        case "quiboa":
            document.getElementById("produto").innerText = "Água sanitária"
            document.getElementById("preço").innerText = "Preço: R$7,99"
            document.getElementById("imagem").src = "./media/agua_sanitaria.png"
            break;
        case "copo":
            document.getElementById("produto").innerText = "Copo"
            document.getElementById("preço").innerText = "Preço: R$6,50"
            document.getElementById("imagem").src = "./media/copo.jpg"
            break;
        case "chinelos":
            document.getElementById("produto").innerText = "Par de chinelos"
            document.getElementById("preço").innerText = "Preço: R$19,99"
            document.getElementById("imagem").src = "./media/chinelos.jpg"
            break;
        case "fio":
            document.getElementById("produto").innerText = "Fio dental"
            document.getElementById("preço").innerText = "Preço: R$1,99"
            document.getElementById("imagem").src = "./media/fio_dental.jpg"
            break;
        case "milho":
            document.getElementById("produto").innerText = "Milho em lata"
            document.getElementById("preço").innerText = "Preço: R$4,20"
            document.getElementById("imagem").src = "./media/milho.jpg"
            break;
        case "macarrão":
            document.getElementById("produto").innerText = "Macarrão"
            document.getElementById("preço").innerText = "Preço: R$8,75"
            document.getElementById("imagem").src = "./media/macarrão.jpg"
            break;
        case "shampoo":
            document.getElementById("produto").innerText = "Shampoo"
            document.getElementById("preço").innerText = "Preço: R$13,99"
            document.getElementById("imagem").src = "./media/shampoo.png"
            break;
        case "meias":
            document.getElementById("produto").innerText = "Par de meias"
            document.getElementById("preço").innerText = "Preço: R$6,99"
            document.getElementById("imagem").src = "./media/meias.jpeg"
            break;
        case "detergente":
            document.getElementById("produto").innerText = "Detergente"
            document.getElementById("preço").innerText = "Preço: R$5,50"
            document.getElementById("imagem").src = "./media/detergente.jpg"
            break;
        default:
            document.getElementById("produto").innerText = "Produto não disponível"
            break;
    }

    document.getElementById("div_produto").style.display = "block"
}

function search_origin(origin_code) {
    switch (origin_code) {
        case 1:
            document.getElementById("procedência").innerText = "Procedência: Região Sul"
            break;
        case 2:
            document.getElementById("procedência").innerText = "Procedência: Região Norte"
            break;
        case 3:
            document.getElementById("procedência").innerText = "Procedência: Região Leste"
            break;
        case 4:
            document.getElementById("procedência").innerText = "Procedência: Região Oeste"
            break;
        case 5:
            document.getElementById("procedência").innerText = "Procedência: Região Nordeste"
            break;
        case 6:
            document.getElementById("procedência").innerText = "Procedência: Região Sudeste"
            break;
        case 7:
            document.getElementById("procedência").innerText = "Procedência: Região Centro-Oeste"
            break;
        default:
            document.getElementById("procedência").innerText = ""
            break;
    }
}

function search_type(product_type) {
    switch (product_type) {
        case 1:
            document.getElementById("tipo").innerText = "Classificação do produto: Alimento não-perecível"
            break;
        case 2:
            document.getElementById("tipo").innerText = "Classificação do produto: Alimento perecível"
            break;
        case 3:
            document.getElementById("tipo").innerText = "Classificação do produto: Vestuário"
            break;
        case 4:
            document.getElementById("tipo").innerText = "Classificação do produto: Higiene pessoal"
            break;
        case 5:
            document.getElementById("tipo").innerText = "Classificação do produto: Limpeza e utensílios domésticos"
            break;
        default:
            document.getElementById("tipo").innerText = ""
            break;
    }
}


