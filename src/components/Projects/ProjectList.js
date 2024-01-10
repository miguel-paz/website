import ProjectItem from "./ProjectItem";

import "./ProjectList.css"

const ProjectList = (props) => {
    return (
        <div className="project-grid-container">
            {props.projects.map((project) => (
                <ProjectItem key={project.name} id={project.name} image={project.image} tags={project.tags}></ProjectItem>
            ))}
        </div>
    );
}

export default ProjectList;