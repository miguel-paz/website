import ButtonList from "../components/Home/ButtonList";

const Projects = (props) => {
  return (
    <div>
      <div className="main">
        <div className="main-content">
          <ButtonList buttons={[{text: "Back", href: "/", spotlight: "bottom-light spotlight-left"}]}></ButtonList>
        </div>
      </div>
    </div>
  );
};

export default Projects;
