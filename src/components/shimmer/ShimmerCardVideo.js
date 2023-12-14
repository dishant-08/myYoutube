import React from "react";

const ShimmerCardVideo = () => {
  return (
    <div className="flex flex-col p-4 m-4">
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 w-64 h-40 rounded-2xl animate-pulse" />
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 mt-4 w-64 h-10 rounded-lg animate-pulse" />
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 mt-4 w-64 h-4 rounded-lg animate-pulse" />
    </div>
  );
};

export default ShimmerCardVideo;
