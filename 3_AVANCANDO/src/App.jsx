import './App.css'
import Invencible from './assets/invencivel2.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'

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
      <ManageData/>
      <ListRender/>
    </>
  )
}

export default App
