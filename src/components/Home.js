import Profile from "./Profile";
import Projects from "../pages/Projects";
import Cursor from "./Cursor";
import { CursorContext } from "./CursorContext";
import { useContext } from "react";

const Home = (props) => {
  const [textEnter, textLeave, linkEnter, cursorVariant, variants] =
    useContext(CursorContext);
  return (
    <Profile
      textEnter={textEnter}
      textLeave={textLeave}
      linkEnter={linkEnter}
      cursorVariant={cursorVariant}
      variants={variants}
    />
  );
};

export default Home;
