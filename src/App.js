import React, { Fragment } from "react";
import "./App.scss";

import Navbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/Sidebar";
import Imgslider from "./helpers/Imgslider";

import Konzept from "./components/contents/Konzept";
import About from "./components/contents/About";

function App() {
  return (
    <Fragment>
      <h1 id="pagetitle">Gemaitlich</h1>
      <Navbar />
      <Imgslider />
      <Sidebar />
      <div className="container">
        <About />
        <Konzept />
      </div>
    </Fragment>
  );
}

export default App;
