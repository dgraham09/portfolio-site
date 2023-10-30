import { Link, useLoaderData } from "react-router-dom";
import TechnologyList from "./UI/TechnologyList";
import CarouselContainer from "./UI/Carousel";
import Footer from "./Footer";
import ScrollToTop from "./UI/ScrollToTop";
import Header from "./Header";
import { useTranslation} from "react-i18next";
import LanguageSwitcher from "./LanguageSwitch";


const Project = () => {
    const project = useLoaderData();
    const { t, i18n } = useTranslation();
    
    return (
        <div className="bg-blue-950 min-h-full m-2 projectPage">
            <Header/>
            <ScrollToTop/>
            <div><LanguageSwitcher />
            </div>
                <div className="projectInfoCard">
                    <Link to={"/"}  className="mb-24">{t('home')}</Link>
                    {project.Url && <Link to={project.Url}>{t('site')}</Link>}
                    <Link to={`https://github.com/dgraham09/${project.Name}`}>{t('source')}</Link>
                    <div className="flex flex-col justify-center">
                        <h1>{`${project.Name}`}</h1>
                        <CarouselContainer project={project}/>
                        <p>{i18n.resolvedLanguage === "en" ? project.Description : project.DescriptionFR}</p>
                        <TechnologyList languages={project.TechStack}/>
                    </div>
                </div>
                <Footer/>
        </div>
    )

}

export default Project;
