import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
// import { timeAgo } from '../../utils/helper'
const SuggestedVideoCard = ({ data }) => {
  if (!data) return null;
  // console.log(data)
  const { snippet } = data;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  //  calculate time elapsed
  const timeElapsed = moment(publishedAt).fromNow();

  return (
    data.id.videoId && (
      <Link to={`/watch?v=${data.id.videoId}`}>
        <div className="w-full mb-2 p-2 gap-2 flex shadow-sm ">
          <div className="w-[45%]">
            <img
              className=" h-[6rem] w-[12rem] rounded-lg"
              src={thumbnails.medium.url}
              alt={`${title} thumbnail`}
            />
          </div>
          <div className="w-[65%] text-left text-sm">
            <p className="font-bold mb-2">{title.substring(0, 50)}</p>
            <p className="mb-1">{channelTitle}</p>
            <p className="text-gray-700">{timeElapsed}</p>
          </div>
        </div>
      </Link>
    )
  );
};

export default SuggestedVideoCard;
