import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page.jsx";
import ProjectData from "./components/data/Projects.json";
import Project from "./components/Project.jsx";
import Home from "../src/pages/Home";
import AppLayout from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

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
  },
]);
root.render(
  <React.StrictMode>
    <AppLayout>
      <RouterProvider router={router} />
    </AppLayout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
