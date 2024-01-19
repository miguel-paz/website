import "./AboutList.css";
import AboutItem from "./AboutItem";

const AboutList = (props) => {
  return (
    <div>
      <div className="project-grid-container">
        {props.about.map((about) => (
          <AboutItem
            key={about.name}
            id={about.name}
            description={about.description}
            image={about.image}
            contents={about.contents}
          ></AboutItem>
        ))}
      </div>
    </div>
  );
};

export default AboutList;
