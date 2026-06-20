import { useState } from "react"
import Botao from "./components/Botao"
function App() {
  const [contador, seContador] = useState(0)

  const incrementar = () => {
    seContador(contador + 1)
  }
  const decrementar = () => {
    if (contador !== 0) {
      seContador(contador - 1)
    }
  }
  const zerar = () => {
    seContador(0)
  }
  return (
    <>
      <h1>Contador: {contador}</h1>
      <br /><br /><br />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <Botao action={incrementar} texto="Adicionar" color='green' />
        <Botao action={decrementar} texto="Retirar" color='red' />
        <Botao action={zerar} texto="Zerar" color='blue' />
      </div>
    </>
  )
}

export default App
