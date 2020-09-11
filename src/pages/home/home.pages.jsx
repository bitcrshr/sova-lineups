import React from "react";

import {
  PageContainer,
  BigText,
  MainContainer,
  StyledButton,
  ButtonsContainer,
} from "./home.styles";

class Homepage {}

const HomePage = () => (
  <PageContainer>
    <MainContainer>
      <BigText>...</BigText>
      <ButtonsContainer>
        <StyledButton>DEFENDING</StyledButton>
        <StyledButton>ATTACKING</StyledButton>
      </ButtonsContainer>
    </MainContainer>
  </PageContainer>
);

export default HomePage;
