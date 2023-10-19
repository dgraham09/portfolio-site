import React, { createContext, useState } from "react";

export const CursorContext = createContext();

const CursorContextProvider = (props) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  const mouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <CursorContext.Provider
      value={[mousePosition, setMousePosition, cursorVariant, setCursorVariant]}
    >
      {props.children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
