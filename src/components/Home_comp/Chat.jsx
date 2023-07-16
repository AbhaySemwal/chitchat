import React, { useContext } from "react";
import {FaVideo} from "react-icons/fa";
import {HiUserAdd} from "react-icons/hi";
import {FiMoreVertical} from "react-icons/fi";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../context/ChatContext";
function Chat(){
    const {data}=useContext(ChatContext);
    return(
        <>
        
        {data.user.displayName?<div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-2 bg-cyan-800 ">
                <div className="p-2 h-10 cursor-pointer text-slate-200 flex items-center gap-x-2">
                    <img className="rounded-full h-10 w-10 object-cover" src={data?.user.photoURL} alt=""/>
                    <span className="text-sm font-bold">{data.user?.displayName}</span>
                </div>
                <div className="text-white cursor-pointer flex gap-x-3">
                    <span><FaVideo/></span>
                    <span><HiUserAdd/></span>
                    <span><FiMoreVertical/></span>                 
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>:
        <div className="flex flex-col gap-3 items-center justify-center bg-slate-300 h-full ">
            <p className="text-4xl mb-10 ">Chitchat</p>
            <p>Click on a user to show chat</p>
            <p>Or</p>
            <p>Find a user to chat</p>
        </div>}
        </>
    );
}
export default Chat;