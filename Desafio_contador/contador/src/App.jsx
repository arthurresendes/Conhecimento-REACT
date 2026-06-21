import { useState, useEffect } from "react"
import Botao from "./components/Botao"
function App() {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log(`O contador mudou para ${contador}`)
  }, [contador])

  const incrementar = () => {
    setContador(contador + 1)
  }
  const decrementar = () => {
    setContador(contador - 1)
  }
  const zerar = () => {
    setContador(0)
  }
  return (
    <>
      <h1>Contador: {contador}</h1>
      <br /><br /><br />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <Botao action={incrementar} texto="Adicionar" color='green' />
        {contador > 0 && <Botao action={decrementar} texto="Retirar" color='red' />}
        {contador != 0 && <Botao action={zerar} texto="Zerar" color='blue' />}
      </div>
    </>
  )
}

export default App
