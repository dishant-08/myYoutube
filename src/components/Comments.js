import React from "react";
import UserLogo from "../assets/user-128.svg";

const Comments = ({ comments }) => {
  // console.log(comment.replies);
  const { name, email, comment, replies } = comments;
  // console.log(replies);
  return (
    <div className="flex w-96 pb-2  ">
      {" "}
      {/* //w-[70%] */}
      <img src={UserLogo} alt="userlogo" className="w-8 h-8 mx-3 " />
      <div className=" flex flex-col ">
        <div className="flex">
          <span className="font-bold"> {name} </span>
          {email && <span className="comment-gray-500 "> ({email} ) </span>}
        </div>
        <p>{comment}</p>
        {/* <p> {replies} </p> */}
        {replies && (
          <div className="ml-5 border-l border-l-black  ">
            {replies.map((item, index) => (
              <Comments key={index} comments={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
