import React, { useState } from "react";
import { useNavigate } from "react-router";

export const buttonArray = ["Live", "Music", "Gaming", "Mixes", "Animal"];

const ButtonList = ({ SeacrhArr = buttonArray }) => {
  const navigate = useNavigate();
  const [selectedBtn, SetselectedBtn] = useState("All");

  // const handleBtn = (item) => {
  //   SetselectedBtn(item);
  //   console.log(item);
  // };
  // onClick={() => handleBtn(item)}

  return (
    <div className=" mt-4 ml-8 mb-6  overflow-x-scroll  flex ">
      <button
        className={` px-3   rounded-xl mx-2 ${
          "All" === selectedBtn
            ? " font-bold text-white bg-black "
            : "bg-slate-300"
        } `}
        onClick={() => {
          SetselectedBtn("All");
          navigate(`/`);
          // setShowSearchModal(false);
        }}
      >
        All
      </button>
      {SeacrhArr.map((item, index) => (
        <button
          key={index}
          className={` px-3    rounded-xl mx-2 ${
            item === selectedBtn
              ? " font-bold text-white bg-black "
              : "bg-slate-300"
          } `}
          onClick={() => {
            SetselectedBtn(item);
            navigate(`/search?q=${item}`);
            // setShowSearchModal(false);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
