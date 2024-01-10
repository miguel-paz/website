import Banner from "../components/Home/Banner";
import Button from "../components/Home/Button";
import FilterList from "../components/Projects/FilterList";
import ProjectList from "../components/Projects/ProjectList";

const Projects = (props) => {
  const description =
    "I have a passion for learning, having created\n a variety of solutions from precision apiculture systems,\n to applications for institution management.";
  const projects = [{"name": "HIVEKIND", "image": "hivekind_apiary.jpg", "tags": ["Frontend", "Backend", "ReactJS", "Python", "SQL"]}, {"name": "AMICA", "image": "hivekind_apiary.jpg", "tags": ["Frontend", "Backend", "Java", "SQL"]}];


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
                <div
                  className="major-light center-hor"
                  style={{ width: "100vw", height: "80vh" }}
                >
                  <div className="main-light-container center-hor">
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
