import Button from "./Button";
import "./ButtonList.css";

const ButtonList = () => {
  return (
    <div className="rest">
      <div className="buttons-grid">
        <Button text="Projects" href="#projects" spotlight="bottom-light spotlight-left"></Button>
        <Button text="About Me" href="#about" spotlight="bottom-light spotlight-right"></Button>
      </div>
    </div>
  );
};

export default ButtonList;
