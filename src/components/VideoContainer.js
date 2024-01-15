import React, { useEffect, useState } from "react";
import { YOUTUBE_DATA } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerVideoCont from "./shimmer/ShimmerVideoCont";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  const [Noofvideo, setnoOfVideo] = useState(10);
  // const dispatch = useDispatch();
  // const isSidebarOpen = useSelector((store) => store.Sidebar.isSidebarOpen);
  // console.log( "sidebar " isSidebarOpen);
  useEffect(() => {
    getVideoData();
  }, []);
  useEffect(() => {
    getVideoData();
  }, [Noofvideo]);

  const handleScrollEvent = async () => {
    // console.log("Scroll Height " + document.documentElement.scrollHeight);
    // console.log("inner Height " + window.innerHeight);
    // console.log("Scroll Top " + document.documentElement.scrollTop);

    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setnoOfVideo((prev) => prev + 5);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  async function getVideoData() {
    const res = await fetch(YOUTUBE_DATA + Noofvideo);
    const data = await res.json();
    setVideo(data.items);
    // setVideo((prev) => [...prev, ...data.items]);

    console.log(data.items);
    console.log(video);
    console.log(Noofvideo);
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
