import React from 'react';
import "./messanger.css"
import Topbar from '../../component/Topbar/Topbar'
import Conversation from '../../component/conversation/Conversation';
import Message from '../../component/message/Message'
import ChatOnline from '../../component/chatOnline/ChatOnline';

function Messanger() {
  return (
    <>
        <Topbar />
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message/>
                        <Message own={true}/>
                        <Message/>
                        <Message own={true}/> 
                    </div> 
                    <div className="chatBoxBottom">
                        <textarea className='chatMessageInput ' placeholder='write something...'></textarea>
                        <button className="chatSubmitButton">send</button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline />
                </div>
            </div> 
        </div>
    </>
  )
}

export default Messanger
