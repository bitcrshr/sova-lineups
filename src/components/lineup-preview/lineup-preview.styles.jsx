import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 100px;
  background-color: white;
  margin-bottom: 15px;
  text-decoration: none;

  cursor: pointer;

  overflow: hidden;
`;

export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  position: relative;
  margin: 0;
  top: 5px;
  left: 10px;
  font-size: 18px;
`;

export const Description = styled.p`
  font-family: "Oswald", sans-serif;
  position: relative;
  margin: 0;
  top: 5px;
  left: 10px;
`;

export const BackgroundImage = styled.img`
  clip-path: polygon(50% 0, 100% 0%, 100% 100%, 23% 100%);
  width: 201px;
  height: 101px;
  position: relative;
  left: 300px;
  top: -50px;
`;
