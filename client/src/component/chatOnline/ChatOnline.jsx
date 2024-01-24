import React from 'react'
import "./chatOnline.css";

function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
            <img className='chatOnlineImg' src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/f69/5fd/9b54eb575f96a1ca525f834d5c.jpg" alt="" />
            <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Soni</span>   
      </div>
    </div>
  )
}

export default ChatOnline
