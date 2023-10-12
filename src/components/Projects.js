import React, { useState, useRef } from "react";
import Card from "./UI/Card";
import { usePopper } from "react-popper";
import classNames from "classnames";

const Projects = (props) => {
  const boxRef = useRef();
  const tooltipRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(!isOpen);
  };

  const { styles, attributes } = usePopper(boxRef.current, tooltipRef.current);
  return (
    <div>
      <Card ref={boxRef}>
        <div className="flex project-thumbnail midpoint">
          <button
            class="view-button"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onClick={onClickButton}
          >
            Click to view
          </button>
        </div>
        <div
          id="tooltip"
          role="tooltip"
          className={classNames('tooltip', {'tooltip-active': isOpen})}
          ref={tooltipRef}
          style={styles.popper}
          {...attributes.popper}
        >
          My tooltip
        </div>
      </Card>
      <Card>
        <div className="flex project-thumbnail spaces">
          <button
            class="view-button"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            Click to view
          </button>
        </div>
      </Card>
      <Card>
        <div className="flex project-thumbnail movieMinder">
          <button
            class="view-button"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            Click to view
          </button>
        </div>
      </Card>
      <Card>
        <div className="flex project-thumbnail findYourHat">
          <button
            class="view-button"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            Click to view
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Projects;
