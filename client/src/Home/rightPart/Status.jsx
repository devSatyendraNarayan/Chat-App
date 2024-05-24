import React from "react";
import { IoVideocamOutline, IoCallOutline } from "react-icons/io5";
function Status() {
  return (
    <>
      <div className="  flex justify-between w-full bg-slate-800 py-3">
        <div className="flex items-center  space-x-5 mx-4">
          
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          
          <div className="flex flex-col items-start ">
            <h1 className="text-white">UserName</h1>
            <p className="text-xs">Online</p>
          </div>
        </div>

        <div className="flex gap-3 mr-3 ">
          <IoVideocamOutline className="p-3 btn btn-square" />
          <IoCallOutline className="p-3 btn btn-square" />
        </div>
      </div>
    </>
  );
}

export default Status;
