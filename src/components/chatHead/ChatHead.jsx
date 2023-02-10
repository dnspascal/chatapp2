
import React from 'react';
import "./chatHead.css";

 function ChatHead({image, name, time, message, counter}) {
     return (
         <div className="chatHeadContents">

             <img src={image} className="dpPicture"/>
             <div className="details">
                 <div className="nameAndTime">
                 <h4>{name}</h4>
                 <span> {time}</span>
             </div>
                 <div className="messageAndCounter">
                     <p className="message">{message}</p>
                     <span className="counter">{counter}</span>
                 </div>
             </div>
         </div>
     );

}

export default ChatHead;