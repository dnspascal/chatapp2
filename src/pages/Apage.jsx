import React from 'react'
import Background from './Background'
import Register from './register/Register'

function Apage() {
  return (
    <div className='container'>
        <div className='bg'>
            <Background/>
        </div>
        <div className='formArea'>
            <Register/>
        </div>
    </div>
  )
}

export default Apage