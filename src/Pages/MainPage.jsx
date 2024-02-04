import React from "react";
import Navbar from "../Components/Navbar";
import BackgroundWaves2 from "../Components/BackgroundWaves2";
import TableRegis from "../Components/TableRegis";
import Tab from "../Components/Tab";
import VideoStream from "../Components/VideoStream";

const MainPage = () => {
  return (
    <>
      <div className="bg-black h-screen overflow-hidden">
        <Navbar />
        <div className="justify-center flex h-[64%] w-full mt-10 gap-2">
          <div className="mockup-window border bg-base-300 w-full ">
            <div className="flex justify-center px-4 py-16 bg-base-200 h-full items-center">
              <VideoStream />
            </div>
          </div>
          <div className="bg-white rounded-md w-full">
            <Tab />
          </div>
        </div>
        <BackgroundWaves2 />
      </div>
    </>
  );
};

export default MainPage;
