import React, { useState } from "react";

import {
  PageContainer,
  BigText,
  MainContainer,
  StyledButton,
  ButtonsContainer,
  BackButton,
} from "./home.styles";

import LineupPreview from "../../components/lineup-preview/lineup-preview.components";

import data from "../../data.js";

const teams = ["defending", "attacking"];
const maps = ["bind", "split", "haven", "ascent"];
const routes = ["a", "b", "c", "mid"];

function HomePage() {
  const [team, setTeam] = useState(null);
  const [map, setMap] = useState(null);
  const [route, setRoute] = useState(null);
  const [treeComplete, setTreeComplete] = useState(false);

  let heading = "";

  if (team == null) heading = "I Am...";
  else if (map == null) heading = "On...";
  else if (route == null) heading = "From...";

  const onTeamButtonClick = (key) => {
    setTeam(key);
  };
  const onMapButtonClick = (key) => {
    setMap(key);
  };
  const onRouteButtonClick = (key) => {
    setRoute(key);
  };
  const onBackButtonClick = () => {
    if (treeComplete) setTreeComplete(false);
    if (route) setRoute(null);
    else if (map) setMap(null);
    else if (team) setTeam(null);
  };

  const generateButtons = () => {
    if (team == null) {
      return Object.keys(data).map((t) => (
        <StyledButton key={t} onClick={() => onTeamButtonClick(t)}>
          {t.toUpperCase()}
        </StyledButton>
      ));
    } else if (map == null) {
      return Object.keys(data[team]).map((m) => (
        <StyledButton key={m} onClick={() => onMapButtonClick(m)}>
          {m.toUpperCase()}
        </StyledButton>
      ));
    } else if (route == null) {
      return Object.keys(data[team][map]).map((r) => (
        <StyledButton key={r} onClick={() => onRouteButtonClick(r)}>
          {r.toUpperCase()}
        </StyledButton>
      ));
    } else {
      setTreeComplete(true);
      console.log(data[team][map][route][0]);
    }
  };

  return (
    <PageContainer>
      <MainContainer>
        <span>
          {team && <BackButton onClick={() => onBackButtonClick()} />}
          <BigText>{heading}</BigText>
        </span>

        {treeComplete ? (
          data[team][map][route].map((lineup) => {
            return (
              <LineupPreview
                title={lineup["title"]}
                description={lineup["info"].substr(0, 50) + "..."}
                imageURL={lineup["image1"]}
              />
            );
          })
        ) : (
          <ButtonsContainer>{generateButtons()}</ButtonsContainer>
        )}
      </MainContainer>
    </PageContainer>
  );
}

export default HomePage;
