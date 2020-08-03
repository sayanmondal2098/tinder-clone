import React, { useState } from 'react';
import "./ChatScreen.css";
import { Avatar } from '@material-ui/core';


function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: "Susant",
            image: 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/06/pjimage-13-1592141699.jpg',
            messages: 'Whts up <3'
        },
        {
            name: "Susant",
            image: 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/06/pjimage-13-1592141699.jpg',
            messages: ' How\'s going'
        },
        {

            messages: 'Love You! :)'
        }
    ]);
     const handleSned = e => {
         e.preventDefailt();
         setMessages([...messages, {messages: input }]);
         setInput("");
     }

    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">
                you matched with her on 04/08/20
            </p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar
                            className="chatScreen_image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen_text">{message.messages}</p>
                    </div>
                ) : (
                        <div className="chatScreen_message">
                            <p className="chatScreen_textUser">{message.messages}</p>
                        </div>
                    )
            ))}
            <div>
                <form className="chatScreen_input">
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="chatScreen_inputField"
                        placeholder="Type a message..."
                        type="text" />
                    <button onClick={handleSned} className="chatScreen_inputButton">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen;