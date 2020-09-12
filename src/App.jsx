import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home.pages";
import "./App.css";
import GlobalFonts from "./assets/fonts/global-fonts.styles";

function App(props) {
  return (
    <div>
      <GlobalFonts />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:lineupID" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
