import React from "react";
function Navbar(){
    return(
        <div className="text-slate-200 p-2 bg-gray-800 h-14 flex items-center justify-between">
            <span className="font-bold">ChitChat</span>
            <div className="flex gap-x-2">
                <img className="object-cover rounded-xl h-6 w-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixZtt0DenR6hIlRFoGmY60gpxxG6zL1lhj5hIgmOs3TKtGGft6d-pD6G5faaG724JNg0&usqp=CAU" alt=" "/>
                <span className="text-sm font-bold pt-0.5">Abhay</span>
                <button type="button" class="text-white text-xs hover:bg-gray-600 rounded-md px-1 py-0.5 dark:bg-gray-500">logout</button>
            </div>
        </div>
    );
}
export default Navbar;