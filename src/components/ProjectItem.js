import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const techNameArr = technologies.map((tech, index) => {
    return <span key={index}>{tech}</span>
  })
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techNameArr/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
