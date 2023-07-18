import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
function Message({message}){

    const{currentUser}=useContext(AuthContext);
    const {data}=useContext(ChatContext);

    const ref=useRef();

    useEffect(()=>{
        ref.current?.scrollIntoView({behavior:"smooth"});
    },[message]);
    return(
        <div ref={ref} className={`${message.senderId===currentUser.uid ?"flex flex-row-reverse gap-2" :"flex flex-row gap-2 justify-start"} mb-4`}>
           {(message.img||(message.text!==""&&message.text!==" "))&&
           <div className="flex flex-col">
            <img className="rounded-full h-8 w-8 object-cover" src={message.senderId===currentUser.uid?currentUser.photoURL:data.user.photoURL} alt=""/>
            <span className="text-gray-600 text-[10px]">{(message.date).toDate().toLocaleTimeString('en-GB').substring(0,5)}</span>
            </div>}
            <div className={`${message.senderId===currentUser.uid ?"items-end" :"items-start"} flex flex-col gap-4 w-[80%]`}>
                {message.text!==""&&message.text!==" "&&
                <p className={`${message.senderId===currentUser.uid ?"rounded-tl-lg text-slate-50 bg-[#0f915d]" :"bg-white rounded-tr-lg "} min-w-fit max-w-full rounded-b-lg px-1.5 py-1.5 flex`}>{message.text}</p>}
                {message.img&&
                <img className={`${message.senderId===currentUser.uid ? "rounded-tl-lg border-[#0f915d]":"rounded-tr-lg border-white"} border-2 border-solid  w-[50%] rounded-b-lg object-cover`} src={message.img} alt=""/>}
            </div>
        </div>
    );
}
export default Message;