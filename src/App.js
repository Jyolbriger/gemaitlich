import React, { Fragment } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Navbar2 from "./components/navigation/Navbar2";
import Sidebar from "./components/navigation/Sidebar";
import Imgslider from "./helpers/Imgslider";

import Konzept from "./components/contents/Konzept";
import About from "./components/contents/About";
import Events from "./components/contents/Events";
import Contact from "./components/contents/Contact";
import Impressum from "./components/sites/Impressum";

function App() {
  return (
    <Router>
      <img
        id="pagetitle"
        src="/images/gemaitlich_logo.svg"
        alt="gemaitlich_logo"
      />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <Navbar />
              <Imgslider />
              <Sidebar />
              <div className="container">
                <Konzept />
                <About />
                <Events />
                <Contact />
                <Link id="imp" to="/impressum">
                  Impressum
                </Link>
              </div>
            </Fragment>
          )}
        />
        <Route
          path="/impressum"
          render={() => (
            <Fragment>
              <Navbar2 />
              <Impressum />
            </Fragment>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
