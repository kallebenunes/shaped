import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  const [isLogged, setIsLogged] = useState(true)


  return isLogged 
  ? (
    <Home/>
  )
  : (
    <h2>Authentication pages</h2>
  )
}

export default App
