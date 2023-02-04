import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Apage from './pages/Apage'
import Background from './pages/Background'
import Register from './pages/register/Register'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Background/>} path='/register'/>
    </Routes>
    </BrowserRouter>
  )
}

export default App