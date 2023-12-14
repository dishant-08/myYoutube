import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_DATA } from "../utils/constants";
import SearchVideoCard from "./SearchVideoCard";
import ButtonList, { buttonArray } from "./ButtonList";
import { useSelector } from "react-redux";
import ShimmerCardVideo from "./shimmer/ShimmerCardVideo";
import SearchShimmerCard from "./shimmer/SearchShimmerCard";

const SearchPage = () => {
  const [searchValue] = useSearchParams(); // yeh array hona chaiye
  const [SearchVideo, SetSearchVideo] = useState([]);
  const SeacrhArr = useSelector((store) => store.addSearch.searchArr);
  const searchApi = useSelector((store) => store.Search);
  const [btnList, SetbtnList] = useState(buttonArray);

  useEffect(() => {
    getSearchVideo();
    SetbtnList(searchApi[SeacrhArr[SeacrhArr.length - 1]]);
    // console.log(btnList);
  }, [searchValue]);

  async function getSearchVideo() {
    const res = await fetch(SEARCH_DATA + searchValue.get("q"));
    const data = await res.json();
    SetSearchVideo(data.items);
    console.log(data.items);
  }

  return (
    <div className="flex flex-col">
      {/* <ButtonList SeacrhArr={searchApi[SeacrhArr[SeacrhArr.length - 1]]} /> */}
      {btnList && btnList.length === 0 ? (
        <ButtonList />
      ) : (
        <ButtonList SeacrhArr={btnList} />
      )}
      {/* <ButtonList /> */}
      {SearchVideo.length === 0 ? (
        <SearchShimmerCard />
      ) : (
        <div className="flex flex-col flex-wrap m-4">
          {SearchVideo.map((item, index) => (
            <Link key={index} to={"/watch?v=" + item.id.videoId}>
              <SearchVideoCard key={item.id} data={item} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
