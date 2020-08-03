import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./Chats.css";


function Chat({name, message, profilePic, timestamp }) {
    return (
        <div className="chat">
            <Avatar className="chat_image" alt={name} src={profilePic} />            
        </div>
    )
}

export default Chat;