import { useEffect, useState } from "react";

import "../../App.css";
import "./Banner.css";

const Banner = (props) => {
  const intro =
    "Hello, my name is Miguel Carvalho\nand I am a software developer.";

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      var light = document.getElementById("light");
      var lightX = light.offsetLeft;
      var X = event.clientX - lightX;
      var Y = event.clientY;
      var angle = ((Math.atan2(Y, X) - Math.PI / 2) * 180) / Math.PI; //
      if (props.movableLight) {
        light.style.transform = "translate(-50%, 0%) rotate(" + angle + "deg)";
      };
    };

    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="banner">
        <div className="banner-title center-hor"></div>
        <div id="lamp">
          <div className="lamp-cable center-hor"></div>
          <div className="lamp-joint center-hor"></div>
          <div id="light" className="lamp center-hor">
            <div className="lamp-elipse center-hor"></div>
            <div className="light center-hor"></div>
          </div>
        </div>
        <div className="banner-title-hidden center-ver-hor">{intro}</div>
      </div>

    </div>
  );
};

export default Banner;
