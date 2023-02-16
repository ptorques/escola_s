let usuarios = []
let tbody = document.getElementById("tabela-usuarios")
var index = 0

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
    if (localStorage.getItem("usuarios") != null) {
        usuarios = JSON.parse(localStorage.getItem("usuarios"))
        usuarios.forEach((usuario, index) => {
            tbody.innerHTML += "<tr> <td>"+usuario[0]+"</td> <td>"+usuario[1]+"</td> <td><i onclick='deleteuser(index)' class='fa-solid fa-trash-can'></i></td> </tr>"
        });
    }
    else {
        tbody.innerHTML += "<tr> <td>Vazio</td> <td>Vazio</td> <td>Vazio</td> </tr>"
    }
}

const deleteuser = (indx) => {
    usuarios = JSON.parse(localStorage.getItem("usuarios"))
    let auxUsuarios = usuarios.filter((v, i) => {return i != indx})
    localStorage.setItem("usuarios", JSON.stringify(auxUsuarios))
    window.location.reload(true)
}