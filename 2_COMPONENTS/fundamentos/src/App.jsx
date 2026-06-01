import './App.css'
import Events from './components/Events'
import FirstComponent from "./components/FirstComponents"
import Portfolio from './components/Portfolio'
//import TemplateExpressions from './components/TemplateExpression'

function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      {/*<TemplateExpressions/>*/}
      <Events />
      <Portfolio/>
    </div>
  )
}

export default App
