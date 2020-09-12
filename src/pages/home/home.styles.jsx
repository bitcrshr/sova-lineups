import styled, { css } from "styled-components";

const ButtonStyles = css`
  width: 40vw;
  height: 50px;
  position: relative;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-family: "Oswald", sans-serif;
  text-decoration: none;
  color: black;
  font-size: 24px;
  outline: none;
  margin: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const CenteredStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const FontBorderStyles = css`
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: white;
`;

export const PageContainer = styled.div``;

export const BigText = styled.h1`
  font-family: ${(props) => (props.noValFont ? "Oswald" : "Valorant")};
  font-size: ${(props) => (props.noValFont ? "30px" : "48px")};
  color: ${(props) => (props.noValFont ? "white" : "#dc3d4b")};
  ${(props) => (props.noValFont ? "" : FontBorderStyles)};
  text-align: center;
`;

export const MainContainer = styled.div`
  ${CenteredStyles};
  width: 60vw;
  height: 80vh;
  background-color: #dc3d4b;
  margin: 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  ${CenteredStyles}
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const StyledButton = styled.button`
  ${ButtonStyles}
`;

export const BackButton = styled.i.attrs((props) => ({
  className: "fas fa-arrow-left fa-2x",
}))`
  color: white;
  padding: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const LineupPreviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
