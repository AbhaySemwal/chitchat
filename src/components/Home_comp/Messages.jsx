import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
function Messages(){
    const [messages,setMessages]=useState([]);
    const {data}=useContext(ChatContext)
    useEffect(()=>{
        const unSub=onSnapshot(doc(db,"chats",data.chatId),(doc)=>{
            doc.exists()&&setMessages(doc.data().messages);
        })
        return ()=>{
            unSub();
        }
    },[data.chatId]);
    return(
        <div className="overflow-y-scroll scrollbar messages h-full bg-slate-300 p-2">
            {
                messages.map(m=>(
                    <Message message={m} key={m.id}/>
                ))
            }
        </div>
    );
}
export default Messages;