// User.js
import React from "react";

function User({ name, email, avatarUrl }) {
  return (
    <>
       <div className="my-4">
        <div className="flex space-x-6  px-4 py-2 hover:bg-gray-800 hover:rounded-md duration-300 cursor-pointer">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src={avatarUrl} alt={name} />
            </div>
          </div>
          <div className="flex flex-col items-start text-sm">
            <h1 className="text-sm font-semibold tracking-wide">{name}</h1>
            <p className="text-gray-500">{email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
