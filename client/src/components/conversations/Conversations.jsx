import {React, useEffect, useState} from 'react'
import "./conversations.css";
import axios from "axios";


export default function Conversations({ conversation, currentUser, sendConvIDToParent }) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});

    useEffect(() => {
        const friendId = conversation.members.find((member) => member !== currentUser._id);

        const fetchUser = async () => {
            try {
                // const res = await axios.get("/users?userId=" + conversation.members[1]);
                const res = await axios.get("/users?userId=" + friendId);
                setUser(res.data)
            } catch (error) {
                console.log(error);  
            }
            
        };
        fetchUser();

    }, [currentUser, conversation]);
    
    return (
        // <div className='conversation' onClick={() => sendConvIDToParent(conversation._id)}>
        <div className='conversation'>
            <img
                src={
                    user?.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"
                  }
                alt=""
                className="conversationImg" />
            
            <span className="conversationName">{user?.username}</span>
        </div>
    )
}
