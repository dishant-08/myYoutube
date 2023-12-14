import React, { useState, useEffect } from "react";

const SearchVideoCard = ({ data }) => {
  const [isLiveVideo, setIsLiveVideo] = useState(false);
  const { snippet } = data;
  const {
    title,
    thumbnails,
    channelTitle,
    description,
    publishedAt,
    liveBroadcastContent,
  } = snippet;
  //   const { viewCount } = statistics;

  useEffect(() => {
    setIsLiveVideo(liveBroadcastContent === "live");
  }, [liveBroadcastContent]);

  return (
    <div className="flex flex-wrap md:flex-nowrap   md:w-full    my-4 gap-4  ">
      <div className="relative">
        <img
          className="rounded-xl  "
          src={thumbnails.medium.url}
          alt="thumbnails"
        />
        {isLiveVideo && (
          <div className="absolute bottom-2 right-2 font-semibold px-0.5 bg-red-500 text-white  ">
            Live
          </div>
        )}
      </div>

      <div className="flex flex-col md:gap-3 md:pt-2 ">
        <div>
          <div className="font-bold text-xs md:text-xl md:hidden ">
            {title.substring(0, 20)}
          </div>
          <div className="font-bold text-xs md:text-xl hidden md:block ">
            {title}
          </div>

          <div>{publishedAt}</div>
        </div>
        <div>{channelTitle}</div>
        <div className=" hidden md:block ">{description} </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
