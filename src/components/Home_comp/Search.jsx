import React from "react";
function Search(){
    return(
        <div className="border-gray-600 border-b-2">
            <div >
                <input className="p-2 bg-transparent border-none outline-none w-full text-slate-200 text-sm" type="text" placeholder="Find a user"/>
            </div>
            <div className="hover:bg-gray-800/80 p-2 cursor-pointer text-slate-200 flex items-center gap-x-2">
                <img className="rounded-full h-10 w-10 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixZtt0DenR6hIlRFoGmY60gpxxG6zL1lhj5hIgmOs3TKtGGft6d-pD6G5faaG724JNg0&usqp=CAU" alt=""/>
                <div>
                    <span className="text-sm font-bold">Name</span>
                </div>
            </div>
        </div>
    );
}
export default Search;