import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home.pages";
import "./App.css";
import GlobalFonts from "./assets/fonts/global-fonts.styles";

const App = (props) => (
  <div>
    <GlobalFonts />
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
