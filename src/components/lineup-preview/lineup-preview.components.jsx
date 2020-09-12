import React from "react";

import {
  Container,
  Title,
  Description,
  BackgroundImage,
} from "./lineup-preview.styles";

const LineupPreview = ({ title, description, imageURL, onClick }, ...props) => (
  <Container onClick={onClick}>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <BackgroundImage src={imageURL} />
  </Container>
);

export default LineupPreview;
