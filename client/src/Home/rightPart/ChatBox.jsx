import React from "react";
import Message from "./Message";

function ChatBox() {
  return (
    <div className="flex-grow flex-1 overflow-y-auto max-h-[calc(100vh-11rem)] ">
      <div className="flex flex-col gap-2">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
}

export default ChatBox;
