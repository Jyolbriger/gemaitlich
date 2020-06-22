import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='container center-all'>
        <Switch>
          <h1>Gemaitlichkeit</h1>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
