import React from 'react'
import "./message.css"
function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img className="messageImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjrg0ApFwtqddRcxYu_giib9zMb2Vx13H1nBhI0Zom3mLzVS5C76D1y6yMgwuyou6TxQ&usqp=CAU" alt="" />
            <p className="messageText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ullam voluptas aut eos tempora culpa in voluptates molestias, quasi, eum atque? Doloremque, inventore molestiae obcaecati temporibus amet aliquam in iure.</p>
        </div>
        <div className="messageBottom">1 hour</div>
    </div>
  )
}

export default Message
