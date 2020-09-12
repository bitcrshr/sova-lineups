import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home.pages";
import LineupDetailsPage from "./pages/lineup-details/lineup-details.pages";
import "./App.css";
import GlobalFonts from "./assets/fonts/global-fonts.styles";

function App(props) {
  return (
    <div>
      <GlobalFonts />
      <Switch>
        <Route
          path="/:team/:map/:route/:lineupID"
          component={LineupDetailsPage}
        />
        <Route path="/:team/:map/:route" component={HomePage} />
        <Route path="/:team/:map" component={HomePage} />
        <Route path="/:team/" component={HomePage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
