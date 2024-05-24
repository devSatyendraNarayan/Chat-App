import "./App.css";
import React from 'react'
import Left from "./Home/leftPart/Left";
import Right from "./Home/rightPart/Right";

function App() {
  return (
    <>
    <div className="flex h-screen text-gray-300">
    <Left/>
    <div className="w-px bg-gray-800"></div>
    <Right/>
    </div>
    
    </>
  )
}

export default App
