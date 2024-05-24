import React from "react";
import { CiLogout } from "react-icons/ci";
function Logout() {
  return (
    <>
      <div>
        <button className="btn btn-circle btn-error glass absolute bottom-4 right-4">
        <CiLogout className="text-2xl text-white"/>
        </button>
      </div>
    </>
  );
}

export default Logout;
