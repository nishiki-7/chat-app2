import React, { useState } from 'react'
import {db} from "../firebase.js";
import firebase from "firebase/compat/app";

const InputMessage = () => {
    const [message, setMessage] = useState("");

    const sendMessage = (e) => {
        if (message === "") return;
        e.preventDefault();

        db.collection("messages").add({
            userName: "ぴよぴよ",
            text: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setMessage("");
    }

  return (
    <div>
        {console.log(message)}
      <form onSubmit={sendMessage}>
        <div className="sendMessage">
            <input 
                className=''
                placeholder='メッセージを入力して送信'
                type='text'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />
            <button>送信</button>
        </div>
      </form>
    </div>
  )
}

export default InputMessage
