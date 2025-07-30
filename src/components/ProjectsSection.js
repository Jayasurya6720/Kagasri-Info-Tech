import React from "react";
import "./ProjectsSection.css";

const projects = [
  {
    title: "Project - 1",
    description: "Lorem Ipsum is dummy text of the printing and typesetting industry.",
    image: "/projects/project1.jpg",
  },
  {
    title: "Project - 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...",
    image: "/projects/project2.jpg",
  },
  {
    title: "Project - 3",
    description: "Lorem Ipsum is dummy text of the printing and typesetting industry.",
    image: "/projects/project3.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="projects-container">
      <h2>
        WHAT WE’VE <span className="highlight-link">CREATED</span>
      </h2>
      {/* <div className="project-cards">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="image-box">
              <img src={proj.image} alt={proj.title} />
              <div className="overlay">
                <p>{proj.description}</p>
              </div>
            </div>
            <h3>{proj.title}</h3>
            
          </div>
        ))}
      </div> */}
      <div className="project-cards">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="image-box">
              <img src={proj.image} alt={proj.title} />
            </div>
            <h3>{proj.title}</h3>
            <p className="description">{proj.description}</p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default ProjectsSection;
