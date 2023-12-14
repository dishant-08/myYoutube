import React from "react";
import ShimmerCardVideo from "./ShimmerCardVideo";

const ShimmerVideoCont = () => {
  return (
    <div className="flex flex-wrap m-4 ">
      {Array(20)
        .fill(" ")
        .map((i, index) => (
          <ShimmerCardVideo key={index} />
        ))}
    </div>
  );
};

export default ShimmerVideoCont;
