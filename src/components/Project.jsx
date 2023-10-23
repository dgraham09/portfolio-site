import Card from "./UI/Card";
import { Link, useLoaderData } from "react-router-dom";
import ProjectData from "./data/Projects.json";
import {useState, useEffect, useContext} from "react"
import Cursor from "./Cursor";
import { CursorContext } from "./CursorContext";
import TechnologyList from "./UI/TechnologyList";
import CarouselContainer from "./UI/Carousel";
import Footer from "./Footer";
import ScrollToTop from "./UI/ScrollToTop";
import Header from "./Header";


const Project = (props) => {
    // const [setCursorVariant] = useContext(CursorContext)
    const project = useLoaderData();
    return (
        <div className="bg-blue-950 min-h-full m-2">
            <Header/>
            <ScrollToTop/>
                <div className="projectInfoCard">
                    <Link to={"/"}>Go back to home</Link>
                    <Link to={"/"}>See source code</Link>
                    <div class="flex flex-col justify-center">
                        <h1>{`${project.Name}`}</h1>
                        <CarouselContainer project={project}/>
                        <p>{`${project.Description}`}</p>
                        <TechnologyList languages={project.TechStack}/>
                    </div>
                </div>
                <Footer/>
        </div>
    )

}

export default Project;
