import React from "react";
function Chats(){
    return(
        <div>
           <div className="hover:bg-gray-800/80 p-2 cursor-pointer text-slate-200 flex items-center gap-x-2">
                <img className="rounded-full h-10 w-10 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixZtt0DenR6hIlRFoGmY60gpxxG6zL1lhj5hIgmOs3TKtGGft6d-pD6G5faaG724JNg0&usqp=CAU" alt=""/>
                <div>
                    <span className="text-sm font-bold">Name</span>
                    <p className="text-xs text-gray-300">Hello</p>
                </div>
            </div>
        </div>
    );
}
export default Chats;