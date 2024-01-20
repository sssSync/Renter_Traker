import LeftComp from "../../components/SearchPage/LeftComp/LeftComp";
import RightComp from "../../components/SearchPage/RightComp/RightComp";
import "./style.scss";
// import React from 'react'

const Page = () => {
  return (
    <div className="RoomSearchPage">
      <div className="main_container pt-36 h-screen flex gap-4 pr-20 lg:pl-20 md:pl-12">
        <div className="left_part w-[22%] h-full flex-grow-0 pt-32 pr-[20px]">
          <LeftComp />
        </div>
        <div className="right_part f-hull flex-grow overflow-y-scroll">
          <RightComp />
        </div>
      </div>
    </div>
  );
};

export default Page;
