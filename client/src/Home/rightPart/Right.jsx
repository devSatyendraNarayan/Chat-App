import React from "react";
import ChatUser from "./ChatUser";
import Status from "./Status";
import ChatBox from "./ChatBox";

function Right() {
  return (
    <div className="relative w-full md:w-[80%] bg-gray-900 flex flex-col">
      <div className="z-[10]">
        <Status />
      </div>
      <div className="z-[9] flex-grow px-4 py-4">
        <ChatBox />
      </div>
      <div className=" z-[10]  absolute bottom-0 right-0 left-0">
        <ChatUser />
      </div>
    </div>
  );
}

export default Right;
