import React from "react";
import BackgroundWaves from "../Components/BackgroundWaves";

function NotFound() {
  return (
    <div className="bg-black h-screen overflow-hidden justify-center flex items-center">
      <div className="text-white text-5xl font-bold">PAGE NOT FOUND</div>
      <BackgroundWaves />
    </div>
  );
}

export default NotFound;
