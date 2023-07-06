import React from "react";
import {FaVideo} from "react-icons/fa";
import {HiUserAdd} from "react-icons/hi";
import {FiMoreVertical} from "react-icons/fi";
import Messages from "./Messages";
import Input from "./Input";
function Chat(){
    return(
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-2 bg-cyan-800 h">
            <div className="hover:bg-gray-800/80 p-2 h-10 cursor-pointer text-slate-200 flex items-center gap-x-2">
                <img className="rounded-full h-10 w-10 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixZtt0DenR6hIlRFoGmY60gpxxG6zL1lhj5hIgmOs3TKtGGft6d-pD6G5faaG724JNg0&usqp=CAU" alt=""/>
                <span className="text-sm font-bold">Name</span>
            </div>
            <div className="text-white cursor-pointer flex gap-x-3">
                 <span><FaVideo/></span>
                 <span><HiUserAdd/></span>
                 <span><FiMoreVertical/></span>                 
            </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
}
export default Chat;