import React from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <MainPage />} />
      </Switch>
    </Router>
  );
}

export default App;
