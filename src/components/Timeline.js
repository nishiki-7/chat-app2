import React, { useEffect, useState } from 'react'
import "./Timeline.css";
import { db } from "../firebase.js";
import InputMessage from './InputMessage';

const Timeline = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db.collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
        })
    }, []);
    
  return (
    <div>
        {console.log(messages)}
      <div>サインアウト</div>
      <div className="messages">
        {messages.map(({id, userName, text, photoURL, uid}) => (
            <div className='post'
                key={id}    
            >
                <div className='post-userName'>
                    {userName}
                </div>
                <div className='post-avatar'>
                    な
                </div>
                <div className='post-message'>
                    {text}
                </div>
                <button>削除</button>
            </div>
        ))}
      </div>
      <InputMessage />
    </div>
  )
}

export default Timeline
