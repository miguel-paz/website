import Banner from "../components/Home/Banner";
import Button from "../components/Home/Button";
import FilterList from "../components/Projects/FilterList";


const Projects = (props) => {
  return (
    <div>
      <div className="main">
        <div className="main-content">
        <Banner></Banner>
          <div style={{ float: "right", margin: "70px" }}>
            <Button
              key="Back"
              text="Back"
              href="/"
              spotlight="bottom-light spotlight-right"
            ></Button>
          </div>
          <div className="main-light-container center-hor">


            <div className="header">
                Projects
            </div>
            <div className="description">
                From microcontrollers to web interfaces, I have a passion for learning, having created precision apiculture systems to protect the bee population as well as applications for institution management with over 15.000 users.
            </div>
            <FilterList ></FilterList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
