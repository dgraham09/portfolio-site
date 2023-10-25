import { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";

export const CursorContext = createContext();

const Cursor = () => {
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

};

export default Cursor;
