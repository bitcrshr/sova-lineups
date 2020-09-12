import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import {
  PageContainer,
  BigText,
  MainContainer,
  StyledButton,
  ButtonsContainer,
  BackButton,
  LineupPreviewsContainer,
} from "./home.styles";

import LineupPreview from "../../components/lineup-preview/lineup-preview.components";

import data from "../../data.js";

function HomePage({ match }) {
  const team = match["params"]["team"];
  const map = match["params"]["map"];
  const route = match["params"]["route"];

  let heading = "";

  if (team === undefined) heading = "I AM...";
  else if (map === undefined) heading = "ON...";
  else if (route === undefined) heading = "FROM...";
  else heading = (map + ": " + team + " from " + route).toUpperCase();

  const history = useHistory();
  const location = useLocation();

  const onTeamButtonClick = (key) => {
    history.push("/" + key);
  };
  const onMapButtonClick = (key) => {
    history.push(location["pathname"] + "/" + key);
  };
  const onRouteButtonClick = (key) => {
    history.push(location["pathname"] + "/" + key);
  };
  const onBackButtonClick = () => {
    history.goBack();
  };

  const generateButtons = () => {
    if (team === undefined) {
      return Object.keys(data).map((t) => (
        <StyledButton key={t} onClick={() => onTeamButtonClick(t)}>
          {t.toUpperCase()}
        </StyledButton>
      ));
    } else if (map === undefined) {
      return Object.keys(data[team]).map((m) => (
        <StyledButton key={m} onClick={() => onMapButtonClick(m)}>
          {m.toUpperCase()}
        </StyledButton>
      ));
    } else if (route === undefined) {
      return Object.keys(data[team][map]).map((r) =>
        data[team][map][r].length > 0 ? ( // only render button if it has lineups for that route
          <StyledButton key={r} onClick={() => onRouteButtonClick(r)}>
            {r.toUpperCase()}
          </StyledButton>
        ) : null
      );
    }
  };

  const generateLineupPreviews = () => {
    return data[team][map][route].map((lineup) => {
      return <LineupPreview key={lineup["title"]} lineup={lineup} />;
    });
  };

  return (
    <PageContainer>
      <MainContainer>
        {team !== undefined && (
          <BackButton onClick={() => onBackButtonClick()} /> // don't show back button on first page
        )}
        <BigText noValFont>{heading}</BigText>

        {route === undefined ? (
          <ButtonsContainer>{generateButtons()}</ButtonsContainer>
        ) : (
          <LineupPreviewsContainer>
            {generateLineupPreviews()}
          </LineupPreviewsContainer>
        )}
      </MainContainer>
    </PageContainer>
  );
}

export default HomePage;
