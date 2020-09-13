import React from "react";
import { useLocation } from "react-router-dom";

import {
  LineupDetailsContainer,
  InfoCard,
  InfoCardTitle,
  InfoCardDescription,
  BouncesContainer,
  BounceBox,
  BounceText,
  PowerContainer,
  PowerBox,
  PowerText,
} from "./lineup-details.styles";

import data from "../../data.js";

function LineupDetailsPage() {
  // get params from URL
  const parsedURL = useLocation()
    .pathname.split("/")
    .filter((s) => s !== "/");

  const team = parsedURL[1];
  const map = parsedURL[2];
  const route = parsedURL[3];
  const lineupID = parsedURL[4];

  // grab object from DB
  const lineup = data[team][map][route].find(
    (val) => val["title"] === lineupID
  );

  console.log(lineup);

  return (
    <LineupDetailsContainer>
      <InfoCard>
        <InfoCardTitle long={lineup["title"].length > 40}>
          {lineup["title"]}
        </InfoCardTitle>
        <InfoCardDescription>{lineup["info"]}</InfoCardDescription>
      </InfoCard>
      <BouncesContainer>
        <BounceText>Bounces: </BounceText>
        <BounceBox fill={lineup["bounces"] > 0} />
        <BounceBox fill={lineup["bounces"] > 1} />
      </BouncesContainer>
      <PowerContainer>
        <PowerText>Power: </PowerText>
        <PowerBox fill={lineup["charges"] > 0} />
        <PowerBox fill={lineup["charges"] > 1} />
        <PowerBox fill={lineup["charges"] > 2} />
      </PowerContainer>
    </LineupDetailsContainer>
  );
}

export default LineupDetailsPage;
