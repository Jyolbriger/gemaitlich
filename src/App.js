import React, { Fragment } from "react";
import "./App.scss";

import Navbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/Sidebar";
import Imgslider from "./helpers/Imgslider";

import Konzept from "./components/contents/Konzept";

function App() {
  return (
    <Fragment>
      <h1 id="pagetitle">Gemaitlich</h1>

      <Navbar />
      <Imgslider />
      <Sidebar />
      <div className="container">
        <Konzept />
      </div>
    </Fragment>
  );
}

export default App;
