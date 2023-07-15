import React, { useContext, useState } from "react";
import {db} from "../../firebase"
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

function Search(){
    const [username,setUserName]=useState("");
    const [user,setUser]=useState(null);
    const [err,setErr]=useState(false);
    const {currentUser}=useContext(AuthContext);
    const {dispatch}=useContext(ChatContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect=async()=>{
    dispatch({type:"CHANGE_USER",payload:user})
    const combinedId=currentUser.uid>user.uid?currentUser.uid+user.uid:user.uid+currentUser.uid;
    try{
        const res=await getDoc(doc(db,"chats",combinedId));
        if(!res.exists())
        {
            await setDoc(doc(db,"chats",combinedId),{messages:[]});
            await updateDoc(doc(db,"userChats",currentUser.uid),{
                [combinedId+".userInfo"]:{
                    uid:user.uid,
                    displayName:user.displayName,
                    photoURL:user.photoURL
                },
                [combinedId+".date"]:serverTimestamp()
            });

            await updateDoc(doc(db,"userChats",user.uid),{
                [combinedId+".userInfo"]:{
                    uid:currentUser.uid,
                    displayName:currentUser.displayName,
                    photoURL:currentUser.photoURL
                },
                [combinedId+".date"]:serverTimestamp()
            });
            
        }

    }
    catch(err)
    {

    }
    setUser(null);
    setUserName("");
  }
    return(
        <div className="border-gray-600 border-b-2">
            <div >
                <input className="p-2 bg-transparent border-none outline-none w-full text-slate-200 text-sm" type="text" placeholder="Find a user" value={username} onKeyDown={handleKey} onChange={e=>setUserName(e.target.value)}/>
            </div>
            {err&&<span className="text-white px-2 text-sm">User not found !</span>}
            {user&&<div className="hover:bg-gray-800/80 p-2 cursor-pointer text-slate-200 flex items-center gap-x-2" onClick={handleSelect}>
                <img className="rounded-full h-10 w-10 object-cover" src={user.photoURL} alt=""/>
                <div>
                    <span className="text-sm font-bold">{user.displayName}</span>
                </div>
            </div>}
        </div>
    );
}
export default Search;