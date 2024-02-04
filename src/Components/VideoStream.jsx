import React, { useState } from "react";

const VideoStream = () => {
  const [isOn, setIsOn] = useState(false);

  console.log("INI ON OFF => ", isOn);
  const WIDTH = 500;
  const HEIGHT = 500;

  const startWebCam = () => {
    setIsOn(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("app__videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopVideo = () => {
    setIsOn(false);
    let video = document.getElementsByClassName("app__videoFeed")[0];
    video.srcObject.getTracks()[0].stop();
  };

  const toggleOnOff = (e) => {
    console.log(e, "=========>");
    if (!e) {
      stopVideo();
      console.log("Stop Video");
    } else {
      console.log("Start Video");
      startWebCam();
    }

    setIsOn(e);
  };

  return (
    <div className="w-screen">
      <div className="flex justify-end items-start gap-2">
        <label>OFF</label>
        <input
          type="checkbox"
          className="toggle"
          onClick={(e) => toggleOnOff(e.target.checked)}
          checked={isOn}
        />
        <label>ON</label>
      </div>

      <div className="h-[28rem] w-full">
        <video muted autoPlay className="app__videoFeed w-full"></video>
      </div>
    </div>
  );
};

export default VideoStream;
