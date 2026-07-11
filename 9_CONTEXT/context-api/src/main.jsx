import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleColorContextProvider } from './context/TitleColorContextProvider.jsx'
import { BorderContextProvider } from './context/BorderContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <BorderContextProvider>
          <App />
        </BorderContextProvider>
      </TitleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>,
)
