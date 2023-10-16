import React, { useState, useRef } from "react";
import Card from "./UI/Card";
import ToolTip from "./UI/Tooltip";
import ProjectData from "./data/Projects.json";

const Projects = (props) => {
  const MidpointRef = useRef();
  const SpacesRef = useRef();
  const MovieMinderRef = useRef();
  const midpointTooltipRef = useRef();
  const spacesTooltipRef = useRef();
  const MovieMinderTooltipRef = useRef();
  const [isOpenMidpoint, setIsOpenMidpoint] = useState(false);
  const [isOpenSpaces, setIsOpenSpaces] = useState(false);

  const toggleToolTip = (project) => {
    `setIsOpen${project}`(`!isOpen${project}`);
  };

  const ProjectsRef = useRef([]);

  ProjectsRef.current = ProjectsRef.current.slice(0, ProjectData.length);

  return ProjectData.map((project, index) => {
    return (
      <Card>
        <div
          key={index}
          className={`flex project-thumbnail ${project.Name}`}
          onMouseEnter={toggleToolTip}
          onMouseLeave={toggleToolTip}
          boxRef={`${project.Name}Ref`}
        >
          <button
            class="view-button"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            Click to view
          </button>
        </div>
        <ToolTip
          ref={(project) => {
            ProjectsRef.current[index] = project;
          }}
          toolTipState={`isOpen${project.Name}`}
          boxRef={`${project.Name}Ref`}
        />
      </Card>
    );
  });
  //   <div>
  //     <Card>
  //       <div
  //         className="flex project-thumbnail midpoint"
  //         onMouseEnter={toggleToolTip}
  //         onMouseLeave={toggleToolTip}
  //         boxRef={midpointRef}
  //       >
  //         <button
  //           class="view-button"
  //           onMouseEnter={props.onMouseEnter}
  //           onMouseLeave={props.onMouseLeave}
  //         >
  //           Click to view
  //         </button>
  //       </div>
  //       <ToolTip
  //         midPointRef={midpointTooltipRef}
  //         toolTipState={isOpen}
  //         boxRef={midpointRef}
  //       />
  //     </Card>
  //     <Card>
  //       <div className="flex project-thumbnail spaces" boxRef={spacesRef}>
  //         <button
  //           class="view-button"
  //           onMouseEnter={props.onMouseEnter}
  //           onMouseLeave={props.onMouseLeave}
  //         >
  //           Click to view
  //         </button>
  //       </div>
  //       <ToolTip
  //         ref={spacesTooltipRef}
  //         toolTipState={isOpen}
  //         boxRef={spacesRef}
  //       />
  //     </Card>
  //     <Card>
  //       <div className="flex project-thumbnail movieMinder">
  //         <button
  //           class="view-button"
  //           onMouseEnter={props.onMouseEnter}
  //           onMouseLeave={props.onMouseLeave}
  //         >
  //           Click to view
  //         </button>
  //       </div>
  //     </Card>
  //     <Card>
  //       <div className="flex project-thumbnail findYourHat">
  //         <button
  //           class="view-button"
  //           onMouseEnter={props.onMouseEnter}
  //           onMouseLeave={props.onMouseLeave}
  //         >
  //           Click to view
  //         </button>
  //       </div>
  //     </Card>
  //   </div>
  // );
};

export default Projects;
