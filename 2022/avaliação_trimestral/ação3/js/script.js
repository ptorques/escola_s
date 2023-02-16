const flags = Array.from(document.querySelectorAll(".card"))
flags.forEach(i => {i.style = "display: flex"})

document.getElementById("search").addEventListener("click", () => {
    flags.forEach(i => {i.style = "display: flex"})
    let input = document.getElementById("userInput").value

    flags.forEach(flag => {
        if (flag.id.toUpperCase() == input.toUpperCase()){
            filteredFlags = flags.filter(flag => {return flag.id.toUpperCase() != input.toUpperCase()})
            filteredFlags.forEach(i => {
                i.style = "display: none;"
            })
        }
    })
    
})