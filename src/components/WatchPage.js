import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import CommentList from "./CommentList";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import Livechat from "./Livechat";
import { commentsList } from "../utils/helper";
import { YOUTUBE_VIDEO_ID_DATA } from "../utils/constants";
import WatchVideoInfo from "./WatchVideoInfo";
import ShowVideoSuggestions from "./ShowVideoSuggestions";

const WatchPage = () => {
  const [videoId] = useSearchParams();

  const [videoInfo, setVideoInfo] = useState();
  const [channelInfo, setChannelInfo] = useState();
  const [isLiveVideo, setIsLiveVideo] = useState(false);
  const [tags, setTags] = useState();
  const dispatch = useDispatch();
  // const isSidebarOpen = useSelector((store) => store.Sidebar.isSidebarOpen);
  videoId.get("v");

  async function getVideoData() {
    const data = await fetch(YOUTUBE_VIDEO_ID_DATA + videoId.get("v"));
    const jsonData = await data.json();
    console.log(jsonData?.items[0]);
    setVideoInfo(jsonData?.items[0]);
    setTags(jsonData?.items[0]?.snippet.tags);
    setIsLiveVideo(
      jsonData?.items[0]?.snippet?.liveBroadcastContent === "live"
    );
    // console.log(tags);
    fetchChannelInfo(jsonData?.items[0]?.snippet?.channelId);
  }

  const fetchChannelInfo = async (channelId) => {
    const YOUTUBE_CHANNEL_INFO_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_GOOGLE_API_YOUTUBE_KEY}`;
    const data = await fetch(YOUTUBE_CHANNEL_INFO_URL);
    const jsonData = await data.json();
    // console.log(jsonData?.items[0]);
    setChannelInfo(jsonData?.items[0]);
  };

  //early return for

  useEffect(() => {
    dispatch(closeSidebar());
    getVideoData();
  }, [videoId]);

  // console.log();
  if (!videoInfo || !channelInfo) return null;

  return (
    <div className="flex flex-col mb-20 ">
      <div className=" flex ">
        <div className=" ml-4 ">
          <iframe
            width="1100"
            height="600"
            src={`https://www.youtube.com/embed/${videoId.get("v")}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <br />

          <WatchVideoInfo
            videoData={videoInfo}
            desc={videoInfo?.snippet?.description}
            channelInfo={channelInfo}
          />

          <div className="font bold text-black mt-40 ml-2 text-2xl ">
            Comments
          </div>
          <CommentList comments={commentsList} />
        </div>
        {/* <div> */}
        {/* <div className="flex flex-col"> */}
        <div className="flex flex-col">
          <div className={` ${isLiveVideo ? "block" : "hidden"}   `}>
            <Livechat />
          </div>
          <ShowVideoSuggestions tags={tags} />
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default WatchPage;

/* 
  <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${videoId.get(
          "v"
        )}?autoplay=1&mute=1`}
        allow="autoplay"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullscreen
      ></iframe> */
