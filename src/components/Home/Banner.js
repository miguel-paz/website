import { useEffect, useState } from "react";

import "../../App.css";
import "./Banner.css";

const Banner = () => {
  const intro = "Hello, my name is Miguel Carvalho\nand I am a software developer."


  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      var light = document.getElementById("light");
      var lightX = light.offsetLeft;
      var X = event.clientX - lightX;
      var Y = event.clientY;
      var angle = ((Math.atan2(Y, X) - Math.PI / 2) * 180) / Math.PI; //

      light.style.transform = "translate(-50%, 0%) rotate(" + angle + "deg)";
    };

    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  return (
    <div className="main">
      <div className="banner">
        <div className="banner-title center-hor">MOVE YOUR MOUSE!</div>
        <div className="lamp">
          <div id="light" className="light center-hor"></div>
        </div>

        <div className="banner-title-hidden center-ver-hor">
            {intro}
        </div>
      </div>
      <div className="">

      </div>
    </div>
  );
};

export default Banner;
