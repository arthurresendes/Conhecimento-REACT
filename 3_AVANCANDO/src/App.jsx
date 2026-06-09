import './App.css'
{/*import Invencible from '../public/invencivel1.jpg' */ }
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
import UserDetails from './components/UserDetails'

function App() {
  const [indice, setIndice] = useState(1)
  const cars = [
    { id: 1, brand: "Ferrari", color: "azul", novo: true, km: 0 },
    { id: 2, brand: "Ferrari", color: "vermelho", novo: false, km: 10000 },
    { id: 3, brand: "Ferrari", color: "verde", novo: true, km: 0 },
  ]

  const persons = [
    { id: 1, name: "Arthur", age: 19, work: "Developer" },
    { id: 2, name: "Matheus", age: 20, work: "Infra" },
    { id: 3, name: "Arthur", age: 17, work: "Atendente" },
  ]

  const voltar = () => {
    if (indice === 1) {
      setIndice(3)
    } else {
      setIndice(indice - 1)
    }
  }


  const proximo = () => {
    if (indice === 3) {
      setIndice(1)
    } else {
      setIndice(indice + 1)
    }
  }

  function showMessage() {
    console.log("Minha função")
  }

  const [message, setMessage] = useState("")

  const handleMessageIntern = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <h1>Avançando em react</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={voltar} className='buttonImg' style={{ color: 'red' }}> &lt; </button>
        <img src={`/invencivel${indice}.jpg`} alt="" style={{ width: "300px", height: "200px" }} />
        <button onClick={proximo} className='buttonImg' style={{ color: 'green' }}> &gt; </button>
      </div>
      {/*
      <div>
        <img src={Invencible} alt="" />
      </div>
      */}
      <ManageData />
      <ListRender />
      <ConditionalRandom />
      <ShowUserName name="Arthur" />{/*Pode passar tanto constantes sem e com useState como parametros nesse caso tambem*/}
      <CarDetails brand="VW" km={0} color="azul" novo={true} />
      <CarDetails brand="VW" km={10000} color="azul" novo={false} />
      <CarDetails brand="VW" km={0} color="vermelho" novo={true} />
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} novo={car.novo} />
      ))}
      <Container myValue="teste">
        <p>Componente filho</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChangeMessagState handleMessage={handleMessageIntern} />
      {persons.map((person) => (
        <UserDetails key={person.id} name={person.name} age={person.age} work={person.work} />
      ))}
    </>
  )
}

export default App
