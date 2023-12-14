import React, { useEffect, useState } from "react";
import { YOUTUBE_DATA } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerVideoCont from "./shimmer/ShimmerVideoCont";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getVideoData();
  }, []);

  async function getVideoData() {
    const res = await fetch(YOUTUBE_DATA);
    const data = await res.json();
    setVideo(data.items);

    console.log(data.items);
    // console.log(video);
  }

  return video.length === 0 ? (
    <ShimmerVideoCont />
  ) : (
    <div className="flex flex-wrap m-4 ">
      {video.map((item, index) => (
        <Link key={index} to={"/watch?v=" + item.id}>
          <VideoCard key={item.id} data={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
