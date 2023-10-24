import Profile from "./components/Profile";
import Cursor from "./components/Cursor";
import CursorContextProvider, {
  CursorContext,
} from "./components/CursorContext";
import Footer from "./components/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";
import { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";
import Home from "./components/Home";

function AppLayout({ children }) {
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
    <div>
      <CursorContextProvider>
        <ScrollToTop />
        <Cursor />
        <main className="App bg-blue-950 min-h-screen">{children}</main>
        {/* <Profile
          textEnter={textEnter}
          textLeave={textLeave}
          linkEnter={linkEnter}
          cursorVariant={cursorVariant}
          variants={variants}
        /> */}
      </CursorContextProvider>
    </div>
  );
}

export default AppLayout;
