import Banner from "../components/Home/Banner";
import Button from "../components/Home/Button";
import FilterList from "../components/Projects/FilterList";
import ProjectList from "../components/Projects/ProjectList";

const Projects = (props) => {
  const description =
    "I have a passion for learning, having created\n a variety of solutions from precision apiculture systems,\n to applications for institution management.";
  const projects = [
    {
      name: "HIVEKIND",
      description: "System to monitor and defend bee colonies, collecting crucial metrics related to its internal temperature, humidity, weight, and location, as well as pictures of its surroundings which are later analysed by machine learning models in order to identify the presence of the Vespa Velutina.",
      image: "hivekind_apiary.jpg",
      techs: ["react_icon.png", "python_icon.png", "postgresql_icon.png", "arduino_icon.png"],
      tags: ["Frontend", "Backend", "ReactJS", "Python", "SQL", "Arduino"],
    },
    {
      name: "AMICA",
      description: "Platform to motivate physical social interactions between multiple audiences for potential social skill development, aimed to neurodivergent and neurotypical children.​",
      image: "amica_2.png",
      techs: ["js_icon.png", "spring_icon.png", "postgresql_icon.png"],
      tags: ["Frontend", "Backend", "Java", "SQL"],
    },
  ];

  return (
    <div>
      <div className="main">
        <div className="main-content">
          <div style={{ float: "right", margin: "70px" }}>
            <Button
              key="Back"
              text="Back"
              href="/"
              spotlight="bottom-light spotlight-right"
            ></Button>
          </div>
          <div className="banner">
            <div className="banner-title center-hor"></div>
            <div id="lamp">
              <div id="light" className="lamp center-hor">
                <div className="lamp-elipse center-hor"></div>
                <div className="major-light center-hor">
                  <div className="major-light-container">
                    <div className="header">Projects</div>
                    <div className="description">{description}</div>
                    <ProjectList projects={projects}></ProjectList>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
