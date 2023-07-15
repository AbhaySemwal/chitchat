import React, { useState } from "react";
import Avt from "../img/user.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,db,storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {doc,setDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Register(){
    const [err,setErr]=useState(false);
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const displayName=e.target[0].value;
        const email=e.target[1].value;
        const password=e.target[2].value;
        const file=e.target[3].files[0];
        try{
            const res=await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                    default:
                        console.log("Upload failed");
                }
            }, 
            (error) => {
                setErr(true);
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                await updateProfile(res.user,{
                    displayName,
                    photoURL:downloadURL,
                });
                await setDoc(doc(db,"users",res.user.uid),{
                    uid:res.user.uid,
                    displayName,
                    email,
                    photoURL:downloadURL
                });
                await setDoc(doc(db,"userChats",res.user.uid),{});
                navigate("/");
                });
            }
            );
        }
        catch(err){
            setErr(true);
        }
        e.target.reset();
    }

    return(
        <div className="bg-gray-800 h-screen flex justify-center items-center">
        <div className="w-full max-w-sm">
            <form onSubmit={handleSubmit} class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col gap-3">
            <h1 className="text-center text-2xl mb-4 font-black">ChitChat</h1>

            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username"/>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email"/>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
            <div className="mb-4">
            <input className="hidden" type="file" id="file"></input>
            <label htmlFor="file" className="flex">
                <img src={Avt} className="w-6 h-6 cursor-pointer" alt=""></img>
                <span className="pl-2 pt-1 text-xs">Add an avatar</span>
            </label>
            </div>
            {err&&<span>Something went wrong</span>}
            <div className="flex items-center justify-between">
            <button type='submit' class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign Up
            </button>
            </div>
            <p className="text-xs font-medium text-center pt-4">Already have an account?<span href="#" className="text-blue-600 underline cursor-pointer">Login</span></p>
        </form>
        <p className="text-center text-gray-500 text-xs">
            &copy;2023 Abhay Semwal All rights reserved.
        </p>
        </div>
    </div>
    );
}
export default Register;