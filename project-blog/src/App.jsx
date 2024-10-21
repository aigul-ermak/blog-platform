import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>

      <Login/>

     {/*<Home/>*/}
      
    </>
  )
}

export default App
