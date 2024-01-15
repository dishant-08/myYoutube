import moment from "moment";
import React from "react";
import {
  convertDurationToTimestamp,
  convertToHumanReadable,
} from "../utils/helper";
import { useSelector } from "react-redux";

const VideoCard = ({ data }) => {
  //   const { localized, thumbnails, channelTitle } = data.snippet; this is wrong way
  //   const { viewCount } = data.statistics;
  //   console.log(data);
  const isSidebarOpen = useSelector((store) => store.Sidebar.isSidebarOpen);
  const { snippet, statistics, contentDetails } = data;
  const { localized, thumbnails, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;
  const { duration } = contentDetails;

  // const timeStamp = duration.slice(2).replace("M", ":").replace("S", "");
  const timeStamp = convertDurationToTimestamp(duration);
  return (
    <div
      className={` flex flex-col  m-4 ${
        isSidebarOpen ? "w-80" : " w-[17rem] "
      }  `}
    >
      <div className="relative">
        <img
          className="rounded-xl  "
          src={thumbnails.medium.url}
          alt="thumbnails"
        />
        <div className="absolute bottom-2 right-2 font-semibold px-0.5 bg-black text-white  ">
          {timeStamp}
        </div>
      </div>
      <div className="font-bold">{localized.title}</div>
      <div>{channelTitle}</div>
      <div className="flex gap-2 ">
        <div>{convertToHumanReadable(viewCount)} views ◦ </div>
        <div> {moment(publishedAt).fromNow()} </div>
      </div>
    </div>
  );
};

export default VideoCard;
