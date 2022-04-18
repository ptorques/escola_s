function search_price(opcao) {
    switch (opcao) {
        case "uva":
            document.getElementById("produto").innerText = "Preço da uva: R$3,89" 
            break;
        case "laranja":
            document.getElementById("produto").innerText = "Preço da laranja: R$1,70" 
            break;
        case "pera":
            document.getElementById("produto").innerText = "Preço da pera: R$2,50" 
            break;
        default:
            document.getElementById("produto").innerText = "Produto não disponível" 
            break;
    }

    document.getElementById("div_produto").style.display = "block"
}


