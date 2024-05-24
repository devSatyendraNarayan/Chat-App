import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { GoPaperclip, GoPaste } from "react-icons/go";
import { IoMicOutline } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import { IoMdSend } from "react-icons/io";

function ChatUser() {
  const [text, setText] = useState("");

  const handlePaste = () => {
    navigator.clipboard.readText().then((clipText) => {
      setText(clipText);
    });
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClear = () => {
    setText("");
  };
  return (
    <div className="bg-slate-800 px-2 py-4">
      <div className="flex items-center justify-between">
        <div className="flex space-x-1 text-xl ">
          <BsEmojiSmile className="btn btn-ghost btn-square p-3 " />
          <GoPaperclip className="btn btn-ghost btn-square p-3 " />
        </div>
        <div className="flex-1 mx-1 relative flex items-center">
          <textarea
            id="input"
            placeholder="Type a message"
            value={text}
            onChange={handleChange}
            className="w-full  rounded-md py-2.5 px-4 outline-none bg-transparent shadow-sm text-sm text-white resize-none overflow-y-hidden"
            rows={1}
          ></textarea>
          {text && (
            <button
              className="absolute top-2 right-2 text-gray-400"
              onClick={handleClear}
            >
              <TiDelete className="text-2xl opacity-50 " />
            </button>
          )}
        </div>
        <div className=" flex space-x-1 text-xl text-white">
          <GoPaste
            onClick={handlePaste}
            className="btn btn-ghost btn-square p-3 "
          />
         
            {text ? (
              <button
                className=""
                
              >
                <IoMdSend className="btn btn-ghost btn-square p-3 " />
              </button>
            ) : (
              <IoMicOutline className="btn btn-ghost btn-square p-3 " />
            )}
          
        </div>
      </div>
    </div>
  );
}

export default ChatUser;
