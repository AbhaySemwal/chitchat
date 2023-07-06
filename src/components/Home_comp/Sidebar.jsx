import React from "react";
import Navbar from "./Navbar";
import Search from "../Home_comp/Search";
import Chats from "./Chats";
function Sidebar(){
    return(
        <div>
            <Navbar/>
            <Search/>
            <Chats/>
        </div>
    );
}
export default Sidebar;