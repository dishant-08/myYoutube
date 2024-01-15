import { useState, useEffect } from "react";
// import { MY_API_KEY } from "../../utils/constants";
import SuggestedVideoCard from "./SuggestedVideoCard";
import { SEARCH_DATA } from "../utils/constants";

const ShowVideoSuggestions = ({ tags }) => {
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [Noofvideo, setnoOfVideo] = useState(7);
  useEffect(() => {
    fetchVideoSuggestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags, Noofvideo]);
  // console.log(tags[0])

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

  const fetchVideoSuggestions = async () => {
    // const YOUTUBE_GET_SUGGESTIONS_INFO_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${tags[0]}&key=${MY_API_KEY}`
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${Noofvideo}&key=${process.env.REACT_APP_GOOGLE_API_YOUTUBE_KEY}&q=` +
        tags[0],
      { credentials: "omit" }
    );
    const jsonData = await data.json();
    // console.log(jsonData?.items)
    setSuggestionsList((prev) => [...prev, ...jsonData?.items]);
  };
  if (!suggestionsList) return null;
  // console.log(tags)
  return (
    <div>
      {suggestionsList.map((suggestion) => {
        return (
          <SuggestedVideoCard
            key={
              suggestion?.id?.videoId
                ? suggestion?.id?.videoId
                : suggestion?.id?.channelId
            }
            data={suggestion}
          />
          // console.log(suggestion?.id?.videoId)
        );
      })}
    </div>
  );
};

export default ShowVideoSuggestions;
