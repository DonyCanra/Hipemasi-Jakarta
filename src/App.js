import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "../src/routes";
// import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
};

export default App;


