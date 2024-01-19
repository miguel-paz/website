import { useState } from "react";

const ProjectItem = (props) => {
  const [drop, setDrop] = useState(false);
  const onClickHandler = (event) => {
    setDrop((prevState) => {
      return !prevState;
    });
  };

  return (
    <div
      className="project-grid-item"
      style={{ maxHeight: `${drop ? "600px" : "120px"}` }}
      onClick={onClickHandler}
    >
      <div className="project-grid-item__top">
        <div className="content">
          <div className="title">{props.id}</div>
        </div>
        <img
          src={require(`../../images/${props.image}`)}
          alt="cover"
        />
      </div>
      <div className="project-grid-item__body">
        {props.description}

        <div className="tech-grid-container">
          {props.techs.map((tech) => (
            <img className="tech-grid-container__img" src={require(`../../images/${tech}`)}></img>
          ))}
        </div>
      </div>

      <div className="project-grid-item__bot">
        <i className={`arrow ${drop ? "up" : "down"}`}></i>
      </div>
    </div>
  );
};

export default ProjectItem;
