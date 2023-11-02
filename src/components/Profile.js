import profile from "../assets/profile.jpg";
import english from "../assets/english.png";
import french from "../assets/french.png";
import technologist from "../assets/technologist.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import cv from "../assets/cv.png";
import InitialLogo from "../assets/Initial_logo.png";
import LanguagesList from "./UI/LanguagesList";
import Projects from "./Projects";
import DavidGrahamCV from "../components/data/DavidGrahamCV.pdf";
import { Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitch";
import AnimatedLetters from "./UI/AnimatedLetters";

const Profile = () => {
  const { t, i18n } = useTranslation();
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["a", "v", "i", "d"];

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <main>
      <div className="grid grid-cols-4 gap-4 profile">
        <aside class="h-full">
          <div className="ml-12 m-5 profile-image-container bg-">
            <img
              src={profile}
              alt="profile"
              className="rounded-full mt-4"
            ></img>
            <p className="text-left mt-8 bio-text">
              {t("summary")}
              <img src={technologist} className="emoji" alt="emoji"></img>
            </p>
            <div className="flex flex-col details-container mt-1">
              <h4 className="underline">My details:</h4>
              <div className="mt-4 flex flex-row justify-start items-center">
                <img
                  src={linkedin}
                  className="language"
                  alt="linkedin icon"
                ></img>
                <p className="grow text-start ms-8 ">
                  <a href="https://www.linkedin.com/in/dgraham3/">
                    {t("linkedin")}
                  </a>
                </p>
              </div>
              <div className="mt-4 flex flex-row justify-start items-center cv">
                <img src={cv} className="language" alt="cv"></img>
                <p className="grow text-start ms-8">
                  <a
                    href={DavidGrahamCV}
                    download="David Graham CV"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("cv")}
                  </a>
                </p>
              </div>
              <div className="mt-4 flex flex-row justify-start items-center github">
                <img src={github} className="language" alt="github"></img>
                <p className="grow text-start ms-8">
                  <a href="https://github.com/dgraham09">{t("github")}</a>
                </p>
              </div>
              <div className="mt-4 flex flex-row justify-start items-center">
                <img src={gmail} className="language" alt="gmail"></img>
                <p className="grow text-start ms-8">
                  <a href="mailto:davidcgraham09@gmail.com">{t("contact")}</a>
                </p>
              </div>
            </div>
            <div className="mt-5 languages-container">
              <h4 className="underline">{t("languages")}:</h4>
              <div className="flex flex-col">
                <div className="mt-4 flex flex-row justify-start items-center">
                  <img src={english} className="language" alt="english"></img>
                  <p className="grow text-start ms-8">{t("native")}</p>
                </div>
                <div className="mt-4 flex flex-row justify-center items-center">
                  <img src={french} className="language" alt="french"></img>
                  <p className="grow text-start ms-8">B2: Intermediate </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <section class="col-start-2 col-end-10">
          <div className="col-span-3 ms-32">
            <div className="container-intro my-36">
              <div className="text-zone">
                <h1 className="text-left greeting">
                  <span className={letterClass}>H</span>
                  <span className={`${letterClass} _12`}>i,</span>
                  <br />
                  <span className={`${letterClass} _13`}>I</span>
                  <span className={`${letterClass} _14`}>'m</span>
                  <img src={InitialLogo} className="initial" alt="initial" />
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                  />
                </h1>
                <h2 className="text-left roles">
                  Junior Full Stack Developer / React Developer
                </h2>
              </div>
            </div>
            <div>
              <p className="text-left w-8/12 mt-80">{t("profile")}</p>
            </div>
            <LanguageSwitcher />
            <div className="scroll-container">
              <div className="icon-scroll"></div>
            </div>
            <section className="AboutMe">
              <div className="w-8/12">
                <p className="text-left">
                  <h3 className="underline my-6">{t("aboutMe")}</h3>
                  <p>{t("experience")}</p>
                  <p class="mt-10"> {t("interest")}</p>
                  <p class="mt-10">{t("attributes")}</p>
                  <div className="flex flex-row my-10">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg"
                      className="language"
                      alt="rails"
                    ></img>
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                      className="language"
                      alt="javascript"
                    ></img>
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                      className="language"
                      alt="react"
                    ></img>
                  </div>

                  <LanguagesList />
                  <p class="mt-10">{t("relationships")}</p>
                </p>
              </div>
              <div className="project-container">
                <p className="text-left">
                  <h3 className="underline my-10">{t("project")}</h3>
                  <Projects />
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Profile;
