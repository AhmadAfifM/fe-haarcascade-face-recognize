import React from "react";
import { Link } from "react-router-dom";
import BackgroundWaves from "../Components/BackgroundWaves";
import Navbar from "../Components/Navbar";

const Dashboard = () => {
  return (
    <>
      <div className="bg-black h-screen overflow-hidden">
        <Navbar />
        <div className="flex justify-center items-center h-2/3">
          <div>
            <div className="text-white text-5xl font-bold">
              Haar Cascade - Full Face Recognize
            </div>
            <div className="text-orange-400 font-bold mt-1 text-4xl">
              Kelompok 2
            </div>
          </div>
        </div>

        <BackgroundWaves />
      </div>
    </>
  );
};

export default Dashboard;
