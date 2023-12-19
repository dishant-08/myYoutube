export const YOUTUBE_DATA = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${process.env.REACT_APP_GOOGLE_API_YOUTUBE_KEY}`;

export const SEARCH_DATA = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${process.env.REACT_APP_GOOGLE_API_YOUTUBE_KEY}&q=`;

export const SEARCH_SUGGESTION = "https://youtube-search-wjet.onrender.com/?q=";
// export const SEARCH_SUGGESTION =
//   "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_ID_DATA = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_GOOGLE_API_YOUTUBE_KEY}&id=`;

export const YOUTUBE_CHANNEL_INFO_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_GOOGLE_API_YOUTUBE_KEY}&id=`;
