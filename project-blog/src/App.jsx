import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Sidebar from './Components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>

      <Home/>
      <Sidebar/>
      
    </>
  )
}

export default App
