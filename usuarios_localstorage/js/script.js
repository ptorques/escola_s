let usuarios = []

const addUsuario = () => {
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let erro = document.querySelector(".erro")

    if (localStorage.getItem("usuarios") != null) {
        usuarios = JSON.parse(localStorage.getItem("usuarios"))
    }

    if (nome == "" || email == "" || senha == "") {
        erro.style.display = "block"
    }
    else {
        usuarios.push([nome, email, senha])
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        erro.style.display = "none"
        alert("Usuário adicionado")
        document.getElementById("nome").value = null
        document.getElementById("email").value = null
        document.getElementById("senha").value = null
    }

}

const listUsuarios = () => {
    let tbody = document.getElementById("tabela-usuarios")
    if (localStorage.getItem("usuarios") != null){
        usuarios = JSON.parse(localStorage.getItem("usuarios"))
        usuarios.forEach(usuario => {
            let x = tbody.insertRow(0)
            let y = x.insertCell(0)
            let z = x.insertCell(1)
            y.innerText = usuario[0]
            z.innerText = usuario[1]
        });
    }
    else {
        tbody.innerHTML += "<tr> <td>Vazio</td> <td>Vazio</td> </tr>"
    }
}

