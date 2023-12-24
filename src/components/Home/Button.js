import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {

  return (
    <div>
      <div className="button">
        <Link to={props.href}>
          <p>{props.text}</p>
        </Link>
      </div>
      <div className={props.spotlight}></div>
    </div>
  );
};

export default Button;
