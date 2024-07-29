import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState("Resultado");

  const soma = () => {
    let somaTudo = Number(num1) + Number(num2);
    setResultado(somaTudo);
  }

  const sub = () => {
    let subTudo = Number(num1) - Number(num2);
    setResultado(subTudo);
  }

  return (
    <>
      <h1>Calculadora</h1>
      <div className="card">

        <input type="number" name='num1' value={num1} onChange={(e) => setNum1(e.target.value)}/> <br />
        <input type="number" name='num2' value={num2} onChange={(e) => setNum2(e.target.value)}/> <br />
        <button onClick={soma}>
          Soma  
        </button>
        <button onClick={sub}>
          Subtração
        </button>
      <p>{resultado}</p>
        <p>
          Contas são legais
        </p>
      </div>
      
    </>
  )
}

export default App
