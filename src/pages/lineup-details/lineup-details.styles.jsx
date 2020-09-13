import styled from "styled-components";

export const LineupDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;

export const InfoCard = styled.div`
  width: 400px;
  min-height: 150px;
  border-radius: 8px;
  background-color: white;
  margin: 0 auto;
  position: relative;
  top: -20%;
`;

export const InfoCardTitle = styled.h1`
  display: inline-flex;
  position: absolute;
  top: 5px;
  left: 15px;
  font-family: "Oswald";
  font-size: ${(props) => (props.long ? "20px" : "24px")};
  margin: 0;
`;

export const InfoCardDescription = styled.p`
  position: relative;
  top: 30px;
  left: 5px;
  font-family: "Oswald";
  font-size: 18px;
  margin: 0;
  padding: 15px;
  padding-left: 10px;
  padding-bottom: 40px;
`;

export const BouncesContainer = styled.div`
  height: 50px;
  width: 150px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  align-items: center;
`;

export const BounceBox = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 8px;
  border: solid 1px #dc3d4b;
  transform: rotate(45deg);
  background-color: ${(props) => (props.fill ? "#dc3d4b" : "white")};
`;

export const BounceText = styled.p`
  margin-right: 15px;
  font-family: "Oswald";
  font-size: 14px;
  font-weight: bold;
`;

export const PowerContainer = styled.div`
  height: 50px;
  width: 300px;
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
`;

export const PowerText = styled.p`
  font-family: "Oswald";
  font-weight: bold;
  font-size: 14px;
  margin-right: 15px;
`;

export const PowerBox = styled.div`
  height: 10px;
  width: 45px;
  border: solid 0.5px black;
  background-color: ${(props) => (props.fill ? "#228bdd" : "white")};
`;
