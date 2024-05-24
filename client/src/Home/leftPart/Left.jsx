// Left.js
import React from "react";
import { IoCreateOutline, IoFilterOutline } from "react-icons/io5";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="relative flex flex-col w-full md:w-[20%] bg-slate-900 py-4 px-2 h-screen">
      <div className="flex justify-between mb-3 px-2">
        <h1 className="text-xl font-semibold">Chats</h1>
        <div className="flex space-x-4">
          <IoCreateOutline />
          <IoFilterOutline />
        </div>
      </div>
      <Search />
      <div className="flex-grow flex-1 overflow-y-auto">
        <Users />
        <Logout />
      </div>
      
    </div>
  );
}

export default Left;
