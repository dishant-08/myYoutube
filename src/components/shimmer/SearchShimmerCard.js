import React from "react";

const SearchShimmerCardComp = () => {
  return (
    <div className="my-4 flex flex-col md:flex-row animate-pulse flex-wrap gap-4 md:w-full md:flex-nowrap">
      <div className="h-[11.25rem] w-[20rem] rounded-xl bg-slate-400 md:h-[11.25rem] md:w-[20rem]" />
      <div className="flex flex-col md:gap-3 md:pt-2">
        <div>
          <div className="h-6 w-[20rem] bg-slate-400  font-bold md:hidden md:w-96 " />
          <div className="hidden h-6 w-20  bg-slate-400  font-bold md:block md:w-48 " />
          <div className="h-4 w-56 my-2 bg-slate-400" />
        </div>
        <div className="mt-2 h-4 w-20 bg-slate-400" />
        <div className="mt-2 hidden h-12 w-full bg-slate-400 md:block" />
      </div>
    </div>
  );
};

const SearchShimmerCard = () => {
  return (
    <div className="flex flex-col flex-wrap m-4  ">
      {Array(10)
        .fill(" ")
        .map((i, index) => (
          <SearchShimmerCardComp key={index} />
        ))}
    </div>
  );
};

export default SearchShimmerCard;
