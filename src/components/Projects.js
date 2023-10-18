import React from "react";
import Card from "./UI/Card";
import ProjectData from "./data/Projects.json";
import { Link } from "react-router-dom";

const Projects = (props) => {
  return ProjectData.map((project, index) => {
    return (
      <Card key={index}>
        <div className={`flex project-thumbnail ${project.Name}`}>
          <Link
            to={`projects/${project.id}`}
            class="view-button"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            Click to view
          </Link>
        </div>
      </Card>
    );
  });
};

export default Projects;
