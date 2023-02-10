import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

  import Background from './pages/Background'
import Register from './pages/register/Register'
import Login from "./pages/login/Login"
import FirstPage from './pages/firstPage/FirstPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Register />} path='/register'/>
      <Route element={<Login/>} path={'/'} />
      <Route element={<FirstPage/>} path='/firstPage' />

    </Routes>
    </BrowserRouter>
  )
}

export default App