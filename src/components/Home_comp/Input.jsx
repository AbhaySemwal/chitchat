import React from "react";
import {RiAttachmentLine} from "react-icons/ri";
import {IoMdSend} from "react-icons/io";
import {BiImageAdd} from "react-icons/bi";
function Input(){
    return(
        <div className="h-12 p-2 bg-white flex items-center justify-between">
           <input className="outline-none w-full" type="text" placeholder="Type a message"/>
           <div className="flex items-center gap-x-3">
           <span className="text-gray-600 cursor-pointer"><RiAttachmentLine/></span>
            <input type="file" className="hidden" id="file"/>
            <label className="text-gray-600 cursor-pointer" htmlFor="file">
            <BiImageAdd/>
            </label>
            <span className="text-gray-600 cursor-pointer"><IoMdSend/></span>
           </div>
        </div>
    );
}
export default Input;