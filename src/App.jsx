import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home.pages";
import "./App.css";
import GlobalFonts from "./assets/fonts/global-fonts.styles";
import LineupPage from "./pages/lineup/lineup.pages";

function App(props) {
  return (
    <div>
      <GlobalFonts />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/:team/:map/:route/:id" component={LineupPage} />
      </Switch>
    </div>
  );
}

export default App;
