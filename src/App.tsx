import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [isLogged, setIsLogged] = useState(true)


  return isLogged 
  ? (
    <h1>Home</h1>
  )
  : (
    <h2>Authentication pages</h2>
  )
}

export default App
