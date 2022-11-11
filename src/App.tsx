import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import AuthenticationPage from './pages/AuthenticationPages'

function App() {
  const [isLogged, setIsLogged] = useState(true)

  return isLogged 
  ? (
    <Home/>
  )
  : (
    <AuthenticationPage/>
  )
}

export default App
