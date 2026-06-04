import './App.css'
import Invencible from './assets/invencivel2.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRandom from './components/ConditionalRandom'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessagState from './components/ChangeMessagState'

function App() {
  const cars = [
    {id: 1, brand: "Ferrari", color: "azul", novo: true, km: 0},
    {id: 2, brand: "Ferrari", color: "vermelho", novo: false, km: 10000},
    {id: 3, brand: "Ferrari", color: "verde", novo: true, km: 0},
  ]

  function showMessage(){
    console.log("Minha função")
  }

  const [message, setMessage] = useState("")

  const handleMessageIntern = (msg) => {
    setMessage(msg)
  }

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
      <CarDetails brand="VW" km={0} color="azul" novo={true}/>
      <CarDetails brand="VW" km={10000} color="azul" novo={false}/>
      <CarDetails brand="VW" km={0} color="vermelho" novo={true}/>
      {cars.map((car) =>(
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} novo={car.novo}/>
      ))}
      <Container myValue="teste">
        <p>Componente filho</p>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>
      <Message msg={message}/>
      <ChangeMessagState handleMessage={handleMessageIntern}/>
    </>
  )
}

export default App
