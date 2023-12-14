import React, { useEffect, useState } from "react";
import UserLogo from "../assets/user-128.svg";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const Livechat = () => {
  const dispatch = useDispatch();
  const [liveMessage, SetliveMessage] = useState("");

  const liveChatMsg = useSelector((store) => store.liveChat.message);

  useEffect(() => {
    let timer = setInterval(() => {
      //   console.log("store called");
      dispatch(
        addMessage({
          name: "Disht pattnaik",
          message: " u r always op 1 ",
        })
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  //   console.log(liveChatMsg);

  return (
    <div className=" flex-1 flex-grow flex flex-col mx-4 border border-yellow-400 overflow-y-scroll ">
      <div className=" w-full font-bold border  py-2  "> Livechat</div>
      <div className=" w-full flex flex-col-reverse border h-[460px] overflow-y-scroll px-4  ">
        {/* <div className=" "> */}
        {/* <ChatMessage name="Dishant sahu" message=" Believe in yourself " />
          <ChatMessage name="Dishant sahu" message=" Believe in yourself " />
          <ChatMessage name="Dishant sahu" message=" Believe in yourself " /> */}
        {liveChatMsg.map((msg, i) => (
          <ChatMessage key={i} name={msg.name} message={msg.message} />
        ))}
        {/* </div> */}
      </div>
      <form
        className=" p-4 flex flex-col "
        onSubmit={(e) => {
          e.preventDefault();
          //   console.log(liveMessage);
          dispatch(
            addMessage({
              name: "Dishant Sahu",
              message: liveMessage,
            })
          );
          SetliveMessage("");
        }}
      >
        <div className="flex items-start ">
          <img className="w-6 h-6 col-span-1 mt-2 " src={UserLogo} alt="user" />
          <div className="flex flex-col mx-2 ">
            <p className="font-medium">Dishant Sahu</p>
            <input
              type="text  "
              placeholder="Chat..."
              className=" border-b border-b-black w-96 focus:outline-none  "
              value={liveMessage}
              onChange={(e) => SetliveMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="self-end mt-2  ">
          <span className=" mx-4 "> {liveMessage.length} /200 </span>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Livechat;
