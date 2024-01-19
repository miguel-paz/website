import { useState } from "react";

const AboutItem = (props) => {
  const [drop, setDrop] = useState(false);

  const onClickHandler = (event) => {
    setDrop((prevState) => {
      return !prevState;
    });

  };

  return (
    <div
      className="about-grid-item"
      style={{
        maxHeight: `${drop ? "1200px" : "80px"}`,
      }}
      onClick={onClickHandler}
    >
      <div className="about-grid-item__top">
        <div className="content">
          <div className="title">{props.id}</div>
        </div>
      </div>
      <div className="about-grid-item__body">
        {props.description}
        {props.id === "Work Experience" ? (
          <div>
            {props.contents.map((content) => (
              <div>
                <div className="date">{content.date}</div>
                <div className="title">
                  <div style={{ float: "left" }}>{content.jobTitle}</div>
                  <div>{content.institution}:</div>
                </div>
                <div className="description">{content.description}</div>
                <div className="about-tech-grid-container">
                  {content.techs.map((tech) => (
                    <img
                      className="about-tech-grid-container__img"
                      src={require(`../../images/${tech}`)}
                    ></img>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {props.id === "Skills" ? (
          <div>
            {props.contents.map((content) => (
              <div>
                <div className="title">{content.title}:</div>
                <div className="about-tech-grid-container">
                  {content.techs.map((tech) => (
                    <img
                      className="about-tech-grid-container__img"
                      src={require(`../../images/${tech}`)}
                    ></img>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {props.id === "Education" ? (
          <div>
            {props.contents.map((content) => (
              <div>
                <div className="date">{content.date}</div>
                <div className="title">
                  <div>{content.institution}:</div>
                  <div>{content.jobTitle}</div>
                </div>
                <div className="description">{content.description}</div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="about-grid-item__bot">
        <i className={`arrow ${drop ? "up" : "down"}`}></i>
      </div>
    </div>
  );
};

export default AboutItem;
