import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import NavBar from '../components/NavBar'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React Router</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
