import React from "react";
import Sidebar from "../Home_comp/Sidebar";
import Chat from "../Home_comp/Chat";
function Home(){
    return(
        <div className="bg-slate-400 h-screen flex items-center justify-center">
            <div className="border border-white overflow-hidden rounded-md lg:w-3/5 w-11/12 lg:h-[80vh] h-[60vh] flex">
                <div className="bg-gray-800/80 border-r-2 border-gray-500 basis-4/12"><Sidebar/></div>
                <div className="basis-8/12"><Chat/></div>
            </div>
        </div>
        
    );
}
export default Home;