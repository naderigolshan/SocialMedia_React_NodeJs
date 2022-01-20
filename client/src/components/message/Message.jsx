import React from 'react'
import "./message.css"
import { format } from "timeago.js";

export default function Message({own, message}) {
    return (
        <div className= {own ? 'message own' : 'message'}>
            <div className="messageTop">
                <img
                    // src={user?.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"}
                    src="../../assets/person/7.jpeg"
                    alt="" 
                    className="conversationImg" />
                <p className='messageText'>
                    {message.text}
                </p>
            </div> 
            <div className="messageBottom">
                {format(message.createdAt)}
            </div>
        </div>
    )
}
