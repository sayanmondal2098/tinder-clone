import React from 'react';
import Chat from "./Chat";
import "./Chats.css";


function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Sysant"
                message="Yoo "
                timesstamp="40 sec ago"
                profilePic="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/06/pjimage-13-1592141699.jpg"
            />
            <Chat
                name="Sysant"
                message="Yoo "
                timesstamp="40 sec ago"
                profilePic="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/06/pjimage-13-1592141699.jpg"
            />
            <Chat
                name="Sysant"
                message="Yoo "
                timesstamp="40 sec ago"
                profilePic="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/06/pjimage-13-1592141699.jpg"
            />
            <Chat
                name="Sysant"
                message="Yoo "
                timesstamp="40 sec ago"
                profilePic="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/06/pjimage-13-1592141699.jpg"
            />
        </div>
    )
}

export default Chats;