import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n = 19
  const [name, setName] = useState("")
  const redTitle = false;
  return (
    <>
      <h1>React com CSS</h1>
      <MyComponent />
      <hr />
      <h1>Inline</h1>
      <p style={{ textAlign: "center", color: 'green', border: '1px solid black', borderRadius: '50px' }}>Paragrafo do app.js</p>

      <hr />
      <h1 style={n > 10 ? ({ color: 'purple' }) : ({ color: 'orange' })}>CSS dinamico</h1>
      <br />
      <div style={{ textAlign: 'center' }}>
        <label htmlFor="">Digite seu nome</label>
        <br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p style={name === "Arthur" ? ({ color: 'blue' }) : ({ color: 'red' })}>Nome é: {name}</p>
      </div>

      <hr />
      <h2 className={redTitle ? 'red-title' : 'title'}>Titulo com classe dinamica</h2>

      <hr />
      <Title />
    </>
  )
}

export default App
