import './App.css'
import MyForms from './components/MyForms'

function App() {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Froms</h2>
      <MyForms user={{ name: "Josias", email: "josias@gmail.com", role: "admin" }} />
    </>
  )
}

export default App
