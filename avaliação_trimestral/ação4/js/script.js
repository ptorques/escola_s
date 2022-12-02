const flags = Array.from(document.querySelectorAll(".card"))
flags.forEach(i => { i.style = "display: flex" })
var userSuggestions = []

if (localStorage.getItem("suggest") != null) {
    userSuggestions = JSON.parse(localStorage.getItem("suggest"))
}

document.getElementById("search").addEventListener("click", () => {
    flags.forEach(i => { i.style = "display: flex" })
    let input = document.getElementById("inputSearch").value

    flags.forEach(flag => {
        if (flag.id.toUpperCase() == input.toUpperCase()) {
            filteredFlags = flags.filter(flag => { return flag.id.toUpperCase() != input.toUpperCase() })
            filteredFlags.forEach(i => {
                i.style = "display: none;"
            })
        }
    })

})

document.getElementById("send").addEventListener("click", () => {
    let input = document.getElementById("inputSuggest").value

    if (input.length != 0) {
        userSuggestions.push(input)
        localStorage.setItem("suggest", JSON.stringify(userSuggestions))
    }
    else {
        alert("Dados não podem ser nulos!")
    }
})