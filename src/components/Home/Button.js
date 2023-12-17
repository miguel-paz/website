import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <div className="button"><a href={props.href}>{props.text}</a></div>
      <div className={props.spotlight}></div>
    </div>
  );
};

export default Button;
