import Button from "./Button";
import "./ButtonList.css";

const ButtonList = (props) => {
  return (
    <div className="rest">
      <div className="buttons-grid">
        {props.buttons.map( btn => (
          <Button key={btn.text} text={btn.text} href={btn.href} spotlight={btn.spotlight}></Button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
