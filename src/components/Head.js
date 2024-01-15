import React, { useContext, useEffect, useState } from "react";
import MenuLogo from "../assets/hamburger-menu.svg";
import YoutubeLogo from "../assets/youtubeLogo.png";
import UserLogo from "../assets/user-128.svg";
import SeacrchLogo from "../assets/searchLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { SEARCH_SUGGESTION } from "../utils/constants";
import { SearchKeeper } from "../utils/SearchSlice";
import { useNavigate } from "react-router-dom";
import { addSearchItem } from "../utils/SearchSugg";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const [searchRes, SetSearchRes] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchData, SetSearchData] = useState([]);
  const navigate = useNavigate();
  const searchApi = useSelector((store) => store.Search);

  async function getSearchData() {
    // console.log("api call", searchRes);
    const res = await fetch(SEARCH_SUGGESTION + searchRes);
    const data = await res.json();
    // setVideo(data);
    // console.log(data?.data[1]);
    SetSearchData(data?.data[1]);
    dispatch(addSearchItem(searchRes));
    dispatch(SearchKeeper({ [searchRes]: data?.data[1] }));

    console.log(searchApi);
    // console.log(addSearchItem);
  }

  useEffect(() => {
    console.log(searchRes);
    let timer = setTimeout(() => {
      if (searchApi[searchRes]) SetSearchData(searchApi[searchRes]);
      else getSearchData();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchRes]);

  function toggleMenu() {
    dispatch(toggleSidebar());
  }
  return (
    <div
      className="grid grid-flow-col   "
      // onBlur={() => setShowSearchModal(false)}
    >
      <div className="flex col-span-1   ">
        <img
          src={MenuLogo}
          onClick={() => toggleMenu()}
          className="w-8 h-8 p-1 m-2 md:mx-4  cursor-pointer "
          alt="Menu"
        />
        <Link to="/">
          <div className="flex-shrink-0">
            <img
              src={YoutubeLogo}
              className="w-32 flex-shrink-0 h-12 px-1 hidden sm:block  cursor-pointer "
              alt="YoutubeLogo"
            />
          </div>
        </Link>
      </div>

      <div className="col-span-11 mx-2  flex flex-col ">
        <div className="flex mt-2   ">
          <input
            type="search"
            onChange={(e) => SetSearchRes(e.target.value)}
            className="  border pl-2 h-8 w-[70%] border-gray-500 focus:outline-none rounded-l-full "
            onFocus={() => setShowSearchModal(true)}
            // onBlur={() => setShowSearchModal(false)}
          />
          <span>
            <img
              src={SeacrchLogo}
              className="w-8 h-8 bg-gray-200 p-2 rounded-r-full "
              alt="Search Logo"
              onClick={() => {
                navigate(`/search?q=${searchRes}`);
                setShowSearchModal(false);
              }}
            />
          </span>
        </div>
        {showSearchModal && (
          <div className=" absolute top-10 w-80 z-40 rounded-2xl shadow-lg bg-white ">
            {searchData.map((search) => (
              // <Link to={`/search?q=${search}`}>
              <div
                className="flex cursor-pointer   "
                onClick={() => {
                  navigate(`/search?q=${search}`);
                  setShowSearchModal(false);
                }}
                key={search}
              >
                <span>
                  <img
                    src={SeacrchLogo}
                    className="w-8 h-8 p-2  "
                    alt="Search Logo"
                  />
                </span>
                <p>{search}</p>
              </div>
              // </Link>
            ))}
          </div>
        )}
        {/* <div className="flex    ">
            <span>
              <img
                src={SeacrchLogo}
                className="w-8 h-8 p-2  "
                alt="Search Logo"
              />
            </span>
            <p>animal</p>
          </div> */}
      </div>
      <div>
        <img className="h-8 col-span-1 mt-2 " src={UserLogo} alt="user" />
      </div>
    </div>
  );
};

export default Head;
