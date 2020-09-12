import React from "react";

import {
  Container,
  Title,
  Description,
  BackgroundImage,
  StyledLink,
} from "./lineup-preview.styles";

import { useLocation } from "react-router-dom";

function LineupPreview({ lineup }) {
  return (
    <StyledLink to={useLocation()["pathname"] + "/" + lineup["title"]}>
      <Container>
        <Title>{lineup["title"]}</Title>
        <Description>{lineup["info"].substr(0, 50).trim() + "..."}</Description>
        <BackgroundImage src={lineup["image1"]} />
      </Container>
    </StyledLink>
  );
}

export default LineupPreview;
