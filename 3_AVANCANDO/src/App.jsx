import './App.css'
import Invencible from './assets/invencivel2.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRandom from './components/ConditionalRandom'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

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
      <ConditionalRandom/>
      <ShowUserName name="Arthur"/>{/*Pode passar tanto constantes sem e com useState como parametros nesse caso tambem*/}
      <CarDetails brand="VW" km={10000} color="azul" novo={true}/>
      <CarDetails brand="VW" km={10000} color="azul" novo={false}/>
      <CarDetails brand="VW" km={10000} color="vermelho" novo={true}/>
    </>
  )
}

export default App
