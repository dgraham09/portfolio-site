import Card from "./UI/Card";
import midpoint from "../assets/midpoint.png";

const Projects = () => {
  return (
    <div>
      <Card>
        {/* <h2 className="text-center">Midpoint</h2> */}
        <div className="flex project-thumbnail midpoint">
        </div>
      </Card>
      <Card>
        <div className="flex project-thumbnail spaces">
        </div>
      </Card>
      <Card>
        <div className="flex project-thumbnail movieMinder">
            
        </div>
      </Card>
    </div>
  );
};

export default Projects;
