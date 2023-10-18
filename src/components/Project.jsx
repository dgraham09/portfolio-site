import Card from "./UI/Card";
import { Link, useLoaderData } from "react-router-dom";
import ProjectData from "./data/Projects.json";
import Header from "./Header";

const Project = () => {

    const project = useLoaderData();
    return (
        <div className="bg-blue-950 h-screen p-12">
            <Header/>
            <div className="projectInfoCard">
                <span><Link to={"/"}><h5>Go back to home</h5></Link><h1>{`${project.Name}`}</h1></span>
                <p>{`${project.Description}`}</p>
            </div>
        </div>
    )

}

export default Project;
