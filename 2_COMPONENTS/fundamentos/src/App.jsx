import './App.css'
import Events from './components/Events'
import FirstComponent from "./components/FirstComponents"
//import TemplateExpressions from './components/TemplateExpression'

function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      {/*<TemplateExpressions/>*/}
      <Events />
    </div>
  )
}

export default App
