import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Register from './Pages/Register'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (

    <Routes>
      <Route path="/" element={<Login />} />
      {/*<Login/>*/}
      <Route path="/register" element={<Register />} />
      {/*<Register/>*/}
      <Route path="/home" element={<Home />} />
      {/*<Home/>*/}
      
    </Routes>
  )
}

export default App
