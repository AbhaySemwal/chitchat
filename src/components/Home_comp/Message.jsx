import React from "react";
function Message(){
    return(
        <div className="owner message flex flex-row-reverse gap-2">
           <div className="messageinfo flex flex-col mb-4">
            <img className="rounded-full h-8 w-8 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixZtt0DenR6hIlRFoGmY60gpxxG6zL1lhj5hIgmOs3TKtGGft6d-pD6G5faaG724JNg0&usqp=CAU" alt=""/>
            <span className="text-gray-600 text-xs">just now</span>
            </div>
            <div className="msgcon flex flex-col gap-4">
                <p className="max-w-xl rounded-tr-lg rounded-b-lg px-1 py-2 flex text-slate-100">hellocjcjhjhjhsdjhsjdhjsjdjshdjhsjdh</p>
                <img className="pb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZsEXAyYRoq2Eos7ZWMJ1pKUajAxb2imQhjg&usqp=CAU" alt=""/>
            </div>
        </div>
    );
}
export default Message;