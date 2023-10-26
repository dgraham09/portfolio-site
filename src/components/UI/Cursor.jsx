import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
        const [mousePosition, setMousePosition] = useState({
          x: 0,
          y: 0,
        });
      
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

        const variants = {
          default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "rgb(206, 67, 159)",
          },
        }


        return (
          <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
          ></motion.div>
        );



}


export default Cursor;
