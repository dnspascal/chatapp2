import React from 'react';
import './Navbar.css';
import Search  from '@mui/icons-material/Search'
import DarkMode from '@mui/icons-material/DarkMode'
import MoreVert from '@mui/icons-material/MoreVert'
 const Navbar = ()=> {
  return (
    <div className='navbar'>
        <div className='title'><i>BOB</i></div>
        <div className='inputs'>
            <input type="search" placeholder='search for users' />
            <Search style={{color:"#262c2c"}}/>
        </div>
        <div className='darkmode'>
             <DarkMode className={'darkicon'}/>
            <MoreVert  className={'morevert'}/>

        </div>
    

    </div>
  )
}

export default Navbar