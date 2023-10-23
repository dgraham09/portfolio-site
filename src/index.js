import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { routes } from "./routes/index.js";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page.jsx";
import ProjectData from "./components/data/Projects.json";
import Project from "./components/Project.jsx";
import ScrollToTop from "./components/UI/ScrollToTop";
import Cursor from "./components/Cursor";
import { ThemeProvider } from "@material-tailwind/react";

// Layouts;
import DefaultLayout from "../src/layout/default";

// Pages
import Home from "../src/pages/Home";
import Projects from "../src/pages/Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   // {
//   //   path: "projects/:projectId",
//   //   element: (
//   //     <ScrollToTop>
//   //       <Project textEnter={Cursor.textEnter} textLeave={Cursor.textLeave} />
//   //     </ScrollToTop>
//   //   ),
//   //   loader: ({ params }) => {
//   //     return ProjgectData.find((project) => project.id == params.projectId);
//   //   },
//   // },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "projects/:projectId",
    element: <Project />,
    loader: ({ params }) => {
      return ProjectData.find((project) => project.id == params.projectId);
    },
    //   element: (
    //     <ScrollToTop>
    //       <Project textEnter={Cursor.textEnter} textLeave={Cursor.textLeave} />
    //     </ScrollToTop>
    //   ),
    //   loader: ({ params }) => {
    //     return ProjgectData.find((project) => project.id == params.projectId);
    //   },
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
