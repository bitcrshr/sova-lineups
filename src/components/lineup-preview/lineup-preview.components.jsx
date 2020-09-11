import React from "react";

import {
  Container,
  Title,
  Description,
  BackgroundImage,
} from "./lineup-preview.styles";

const LineupPreview = ({ title, description, imageURL }, ...props) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <BackgroundImage src={imageURL} />
  </Container>
);

export default LineupPreview;
