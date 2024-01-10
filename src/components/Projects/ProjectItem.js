import {useState} from "react";
import hivekindApiary from "../../images/hivekind_apiary.jpg"

const ProjectItem = (props) => {
    const [drop, setDrop] = useState(false);
    const onClickHandler = (event) => {
        setDrop((prevState) => {
            return !prevState;
        });
    };

  return (
    <div className="project-grid-item" style={{maxHeight: `${drop ? "600px" : "120px"}`}} onClick={onClickHandler}>
        <div className="project-grid-item__top">
            <div className="content">
                <div className="title">{props.id}</div>
            </div>
            <img src={require(`../../images/${props.image}`)} alt="hivekind_cover"/>
        </div>
        <div className="project-grid-item__body"></div>

        <div className="project-grid-item__bot">
            <i className={`arrow ${drop ? "up" : "down"}`}></i>
        </div>
    </div>
  );
};

export default ProjectItem;
