import React from "react";
import projectData from '../../projectdata';

function Projects(props) {
    return (
        <ul className="project-group">
            {projectData.map(item => (
                <li className="project-group-item" key={item.id}>
                    {item.name}
                </li>
            ))}
        </ul>
    );
}        

export default Projects;