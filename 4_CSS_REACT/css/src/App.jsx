import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  return (
    <>
      <h1>React com CSS</h1>
      <MyComponent />
      <hr />
      <h1>Inline</h1>
      <p style={{ textAlign: "center", color: 'green', border: '1px solid black', borderRadius: '50px' }}>Paragrafo do app.js</p>
    </>
  )
}

export default App
