import profile from "../assets/profile.jpg";
import english from "../assets/english.png";
import french from "../assets/french.png";
import technologist from "../assets/technologist.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import cv from "../assets/cv.png";
import LanguagesList from "./UI/LanguagesList";
import Projects from "./Projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useContext } from "react";

const Profile = () => {
  const { scrollY } = useScroll();
  const introOpacity = useTransform(
    scrollY,
    [0, 5, 25, 50, 75, 80],
    [1, 0.8, 0.6, 0.4, 0.2, 0],
  );
  const bioOpacity = useTransform(
    scrollY,
    [90, 150, 210, 280, 320, 360],
    [0, 0.2, 0.4, 0.6, 0.8, 1],
  );

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  // const location = useLocation();

  const [cursorVariant, setCursorVariant] = useState("default");

  const mouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const textEnter = () => {
    setCursorVariant("text");
  };

  const textLeave = () => {
    setCursorVariant("default");
  };

  const linkEnter = () => {
    setCursorVariant("link");
  };

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgb(206, 67, 159)",
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 60,
      y: mousePosition.y - 0,
      backgroundColor: "rgb(206, 67, 159)",
      mixBlendMode: "lighten",
    },
    link: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: "rgb(206, 67, 159)",
      mixBlendMode: "lighten",
    },
  };
  return (
    <main>
      <div className="grid grid-cols-4 gap-4 profile">
        <aside class="h-full">
          <div
            className="ml-12 m-5 profile-image-container bg-"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <p className="text-left mt-8 bio-text">
              Former Product Owner who has made the switch to Full Stack
              development
              <img src={technologist} className="emoji"></img>
            </p>
            <div className="flex flex-col details-container mt-1">
              <h4 className="underline">My details:</h4>
              <div className="mt-4 flex flex-row justify-start items-center">
                <img src={linkedin} className="language"></img>
                <p
                  className="grow text-start ms-8"
                  onMouseEnter={linkEnter}
                  onMouseLeave={textLeave}
                >
                  <a href="">See my Linkedin here</a>
                </p>
              </div>
              <div className="mt-4 flex flex-row justify-start items-center">
                <img src={cv} className="language"></img>
                <p
                  className="grow text-start ms-8"
                  onMouseEnter={linkEnter}
                  onMouseLeave={textLeave}
                >
                  <a href="#">See my CV here </a>
                </p>
              </div>
              <div className="mt-4 flex flex-row justify-start items-center">
                <img src={github} className="language"></img>
                <p
                  className="grow text-start ms-8"
                  onMouseEnter={linkEnter}
                  onMouseLeave={textLeave}
                >
                  <a href="#">See my Github here</a>
                </p>
              </div>
              <div className="mt-4 flex flex-row justify-start items-center">
                <img src={gmail} className="language"></img>
                <p
                  className="grow text-start ms-8"
                  onMouseEnter={linkEnter}
                  onMouseLeave={textLeave}
                >
                  <a href="">Contact me</a>
                </p>
              </div>
            </div>
            <div className="mt-5 languages-container">
              <h4 className="underline">Languages:</h4>
              <div className="flex flex-col">
                <div className="mt-4 flex flex-row justify-start items-center">
                  <img src={english} className="language"></img>
                  <p className="grow text-start ms-8">Native</p>
                </div>
                <div className="mt-4 flex flex-row justify-center items-center">
                  <img src={french} className="language"></img>
                  <p className="grow text-start ms-8">B2: Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <section class="col-start-2 col-end-10">
          <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
          ></motion.div>
          <div
            className="col-span-3 ms-20"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <motion.div
              style={{ opacity: introOpacity }}
              className="w-full h-96"
            >
              <h1 className="text-left mt-24 w-full">Nice to meet you!</h1>
              <p className="text-left w-8/12">
                I'm a junior full stack developer with a strong strategic
                mindset who develops web applications to solve challenging
                problems.
              </p>
              <p className="text-left mt-8">
                Scroll to learn a little more....
              </p>
            </motion.div>
            <div className="scroll-container">
              <div className="icon-scroll"></div>
            </div>
            <section>
              <motion.div style={{ opacity: bioOpacity }} className="w-8/12">
                <p className="text-left">
                  <h3
                    className="underline"
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    About me
                  </h3>
                  <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    Over the last few years having worked for a large financial
                    institution as a Product Owner, I found myself spending more
                    time trying to understand the software solutions that were
                    implemented.
                    <p class="mt-10">
                      {" "}
                      I became greatly interested in how full stack web
                      applications were delivered and I took it upon myself to
                      take time to improve my programming skills learning React
                      and completing Le Wagon in France as I knew I wanted to
                      move into software development.
                    </p>
                    <p class="mt-10">
                      I have a solid understanding of the attributes needed to
                      work on strategic initiatives in an agile manner with a
                      growing skill set in:
                      <div className="flex flex-row my-10">
                        <img
                          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg"
                          className="language"
                        ></img>
                        <img
                          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                          className="language"
                        ></img>
                        <img
                          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                          className="language"
                        ></img>
                      </div>
                    </p>
                    <LanguagesList />
                    <p class="mt-10">
                      I'm an experienced communicator with senior stakeholders
                      with a proven ability to develop strong relationships and
                      work collaboratively and pragmatically across different
                      cultures.
                    </p>
                  </p>
                </p>
              </motion.div>
              <motion.div>
                <p className="text-left">
                  <h3 className="underline">Projects</h3>
                  <Projects onMouseEnter={linkEnter} onMouseLeave={textLeave} />
                </p>
              </motion.div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Profile;
