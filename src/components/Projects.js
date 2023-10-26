import React from "react";
import Card from "./UI/Card";
import ProjectData from "./data/Projects.json";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Projects = (props) => {
  const { t } = useTranslation();
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
              {t('click')}
            </Link>
          </div>
        </Card>
    );
  });
};

export default Projects;
