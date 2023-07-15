import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

function Navbar(){
    const {currentUser}=useContext(AuthContext);

    return(
        <div className="text-slate-200 p-2 bg-gray-800 h-14 flex items-center justify-between">
            <span className="font-bold">ChitChat</span>
            <div className="flex gap-x-2">
                <img className="object-cover rounded-xl h-6 w-6" src={currentUser.photoURL} alt=" "/>
                <span className="text-sm font-bold pt-0.5">{currentUser.displayName}</span>
                <button type="button" onClick={()=>signOut(auth)} class="text-white text-xs hover:bg-gray-600 rounded-md px-1 py-0.5 dark:bg-gray-500">logout</button>
            </div>
        </div>
    );
}
export default Navbar;