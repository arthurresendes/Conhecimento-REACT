import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
