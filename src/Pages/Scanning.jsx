import React from "react";
import Navbar from "../Components/Navbar";
import BackgroundWaves2 from "../Components/BackgroundWaves2";
import VideoStream from "../Components/VideoStream";

const Scanning = () => {
  return (
    <>
      <div className="bg-black overflow-hidden h-screen">
        <Navbar />
        <div className="justify-center h-full flex mt-9">
          <div className="mockup-window border bg-base-300 w-1/2 h-[65%] ">
            <div className="flex justify-center px-4 py-16 bg-base-200 h-full items-center">
              <VideoStream />
            </div>
          </div>
        </div>
      </div>
      <BackgroundWaves2 />
    </>
  );
};

export default Scanning;
