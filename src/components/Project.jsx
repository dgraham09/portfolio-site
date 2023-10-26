import { Link, useLoaderData } from "react-router-dom";
import TechnologyList from "./UI/TechnologyList";
import CarouselContainer from "./UI/Carousel";
import Footer from "./Footer";
import ScrollToTop from "./UI/ScrollToTop";
import Header from "./Header";


const Project = () => {
    const project = useLoaderData();

    return (
        <div className="bg-blue-950 min-h-full m-2 projectPage">
            <Header/>
            <ScrollToTop/>
                <div className="projectInfoCard">
                    <Link to={"/"}>Go back to home</Link>
                    <Link to={`https://github.com/dgraham09/${project.Name}`}>See source code</Link>
                    <div className="flex flex-col justify-center">
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
