import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import MainBar from '../../components/mainbar/Mainbar'
import './FirstPage.css'
function FirstPage() {
  return (
    <div className='firstPage'>

            <Navbar/>

        <div className='bottom'>
            <Sidebar/>
            <MainBar/>
        </div>
    </div>
  )
}

export default FirstPage