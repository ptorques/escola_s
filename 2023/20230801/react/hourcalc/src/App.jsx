import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [hi, setHi] = useState(0)
  const [mi, setMi] = useState(0)
  const [hf, setHf] = useState(0)
  const [mf, setMf] = useState(0)
  const [res, setRes] = useState(0)
  let vi, vf, resH, resM = 0

  const somar = () => {
    vi = (Number(hi) * 60) + Number(mi)
    vf = (Number(hf) * 60) + Number(mf)

    resH = Math.floor((vi + vf) / 60)
    resM = (vi + vf) % 60

    setRes(`${resH}:${resM}`)
  }


  const subtrair = () => {
    vi = (Number(hi) * 60) + Number(mi)
    vf = (Number(hf) * 60) + Number(mf)



    resH = vi > vf ? Math.floor((vi - vf) / 60) : Math.floor((vf - vi) / 60)
    resM = vi > vf ? (vi - vf) % 60 : (vf - vi) % 60

    setRes(`${resH}:${resM}`)
  }


  return (
    <>
      <h1>Calculadora de horário</h1>
      <div className='inputs'>
      <input type="number" value={hi} onChange={read => setHi(read.target.value)} min={0} max={24}/>
      <input type="number" value={mi} onChange={read => setMi(read.target.value)} min={0} max={60}/>
      <input type="number" value={hf} onChange={read => setHf(read.target.value)} min={0} max={24}/>
      <input type="number" value={mf} onChange={read => setMf(read.target.value)} min={0} max={60}/>

      <button onClick={somar}>SOMAR</button>
      <button onClick={subtrair}>SUBTRAIR</button>

      <input type="string" value={res} readOnly/>
      </div>
    </>
  )
}

export default App
