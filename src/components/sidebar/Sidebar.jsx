import React from 'react'
import './Sidebar.css'
import AddCircle from '@mui/icons-material/AddCircle'
import {mydata} from "../../assets/data";
import ChatHead from "../chatHead/ChatHead.jsx";

function Sidebar(){
    return(
        <div className='sideBar'>

            <div className='chatheadBodies'>
                {
                    mydata.map((item)=>{
                        return <ChatHead image={item.image} name={item.name} counter={item.counter} message={item.message} time={item.time} />
                    })
                }
            </div>

          <AddCircle  className='addButton' style={{fontSize:"50px" }}/>
        </div>
    )
}
export default Sidebar