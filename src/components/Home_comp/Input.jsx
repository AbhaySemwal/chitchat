import React, { useContext, useState } from "react";
import {RiAttachmentLine} from "react-icons/ri";
import {IoMdSend} from "react-icons/io";
import {BiImageAdd} from "react-icons/bi";
import { ChatContext } from "../../context/ChatContext";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid";
import { AuthContext } from "../../context/AuthContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
function Input(){

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
        if(text!==""&&text!==" ")
        {
            await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
            }),
            });
        }
    }
    if(img!==null)
    {
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [data.chatId + ".lastMessage"]: {
            text:"Image",
          },
          [data.chatId + ".date"]: serverTimestamp(),
        });
    
        await updateDoc(doc(db, "userChats", data.user.uid), {
          [data.chatId + ".lastMessage"]: {
            text:"Image",
          },
          [data.chatId + ".date"]: serverTimestamp(),
        });
    }
    else{
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [data.chatId + ".lastMessage"]: {
            text,
          },
          [data.chatId + ".date"]: serverTimestamp(),
        });
    
        await updateDoc(doc(db, "userChats", data.user.uid), {
          [data.chatId + ".lastMessage"]: {
            text,
          },
          [data.chatId + ".date"]: serverTimestamp(),
        });
    }

    setText("");
    setImg(null);
  };
    return(
        <div className="h-12 p-2 bg-white flex items-center justify-between">
           <input className="outline-none w-full" type="text"  value={text} onChange={e=>setText(e.target.value)} placeholder="Type a message"/>
           <div className="flex items-center gap-x-3">
           <span className="text-gray-600 cursor-pointer"><RiAttachmentLine/></span>
            <input type="file" className="hidden" id="file" onChange={(e) => setImg(e.target.files[0])}/>
            <label className="text-gray-600 cursor-pointer" htmlFor="file" >
            <BiImageAdd/>
            </label>
            <span onClick={handleSend} className="text-gray-600 cursor-pointer"><IoMdSend/></span>
           </div>
        </div>
    );
}
export default Input;