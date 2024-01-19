import ProjectItem from "./ProjectItem";

import "./ProjectList.css";

const ProjectList = (props) => {
  return (
    <div className="project-grid-container">
      {props.projects.map((project) => (
        <ProjectItem
          key={project.name}
          id={project.name}
          description={project.description}
          image={project.image}
          techs={project.techs}
          tags={project.tags}
        ></ProjectItem>
      ))}
    </div>
  );
};

export default ProjectList;
