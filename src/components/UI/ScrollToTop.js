import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  //   const { pathname } = useLocation();

  const location = useLocation();

  console.log(location);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children || null;
};

export default ScrollToTop;
