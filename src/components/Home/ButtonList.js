import Button from "./Button";
import "./ButtonList.css";

const ButtonList = () => {
  return (
    <div className="rest">
      <div className="buttons-grid">
        <Button text="Projects"></Button>
        <Button text="About Me"></Button>
        <div className="bottom-light spotlight-left"></div>
        <div className="bottom-light spotlight-right"></div>
      </div>
    </div>
  );
};

export default ButtonList;
