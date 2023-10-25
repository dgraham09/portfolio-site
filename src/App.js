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

  return (
    <div>
      {/* <CursorContextProvider> */}
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
      {/* </CursorContextProvider> */}
    </div>
  );
}

export default AppLayout;
