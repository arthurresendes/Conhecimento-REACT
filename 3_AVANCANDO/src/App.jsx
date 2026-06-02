import './App.css'
import Invencible from './assets/invencivel2.jpg'

function App() {
  return (
    <>
      <h1>Avançando em react</h1>
      <div>
        <img src="/invencivel.jpg" alt="Invencible" />{/* Acessando imagens no public */}
      </div>
      <div>
        <img src={Invencible} alt="" style={{width: "300px"}}/>
      </div>
    </>
  )
}

export default App
