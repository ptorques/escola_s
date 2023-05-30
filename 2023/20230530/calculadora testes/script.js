const hi = document.getElementById("hi")
const mi = document.getElementById("mi")
const hf = document.getElementById("hf")
const mf = document.getElementById("mf")
const resultado = document.getElementById("result")
const sum = document.getElementById("sum")
const sub = document.getElementById("sub")
let vi, vf, resH, resM = 0


const somar = () => {
    vi = (Number(hi.value)*60) + Number(mi.value)
    vf = (Number(hf.value)*60) + Number(mf.value)

    resH = Math.floor((vi + vf)/60)
    resM = (vi + vf) % 60

    resultado.innerHTML = `${resH}:${resM}`
}


const subtrair = () => {
    vi = (Number(hi.value)*60) + Number(mi.value)
    vf = (Number(hf.value)*60) + Number(mf.value)



    resH = vi > vf ? Math.floor((vi - vf)/60) : Math.floor((vf - vi)/60)
    resM = vi > vf ? (vi - vf) % 60 : (vf - vi) % 60

    resultado.innerHTML = `${resH}:${resM}`
} 

sum.addEventListener("click", somar)
sub.addEventListener("click", subtrair)