import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import { ChatContext } from "../../context/ChatContext";
function Chats(){
    const [chats,setChats]=useState([]);
    const {currentUser}=useContext(AuthContext);
    const {dispatch}=useContext(ChatContext);

    useEffect(()=>{
        const getChats=()=>{
            const unsub=onSnapshot(doc(db,"userChats",currentUser.uid),(doc)=>{
                setChats(doc.data());
            })
            return ()=>{
                unsub();
            }
        }
        currentUser.uid&&getChats();
    },[currentUser.uid]);
    
    const handleSelect=(u)=>{
        dispatch({type:"CHANGE_USER",payload:u})
    }

    return(
        <>
        {Object.entries(chats)?.sort((a,b)=>b[1].date-a[1].date)?.map(chat=>(
           <div key={chat[0]} onClick={()=>{handleSelect(chat[1].userInfo)}} className="hover:bg-gray-800/80 p-2 cursor-pointer text-slate-200 flex items-center gap-x-2">
                <img className="rounded-full h-10 w-10 object-cover" src={chat[1].userInfo?.photoURL} alt=""/>
                <div className="">
                    <span className="text-sm font-bold">{chat[1].userInfo?.displayName}</span>
                    <p className="truncate w-[200px] text-xs text-gray-300">{chat[1].lastMessage?.text}</p>
                </div>
            </div>
        ))}
        </>
    );
}
export default Chats;