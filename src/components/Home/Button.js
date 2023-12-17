import "./Button.css";

const Button = (props) => {
  return <div className="button">{props.text}<div className="underline"></div></div>;
};

export default Button;
