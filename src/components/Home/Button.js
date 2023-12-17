import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  const [opacity, setOpacity] = useState(false);
  const [spotlightClass, setClass] = useState(props.spotlight);
  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log("page loaded");
      // do something else
      setClass(props.spotlight + " show");
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div>
      <div className="button">
        <Link to={props.href}>
          <p>{props.text}</p>
        </Link>
      </div>
      <div className={spotlightClass}></div>
    </div>
  );
};

export default Button;
