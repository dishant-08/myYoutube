import React from "react";
import Comments from "./Comments";

const CommentList = ({ comments }) => {
  //   { name , text , replies  } = comment
  return (
    <div className=" mx-3 w-[50%] bg-slate-100 ">
      {comments.map((item, index) => (
        <Comments key={index} comments={item} />
      ))}
    </div>
  );
};

export default CommentList;
