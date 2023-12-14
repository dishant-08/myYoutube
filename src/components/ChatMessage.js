import React from "react";
import UserLogo from "../assets/user-128.svg";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center ">
      <img className="w-6 h-6 col-span-1 mt-2 " src={UserLogo} alt="user" />

      <span className=" text-gray-400 mx-2 "> {name} </span>
      <span className="  "> {message} </span>
    </div>
  );
};

export default ChatMessage;
