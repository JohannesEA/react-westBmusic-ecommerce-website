import styled from "styled-components";
import { rotate } from "../../animations/animations";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 8em;
`;

export const Center = styled.div`
  position: absolute;
  height: 1em;
  width: 1em;
  background-color: white;
  z-index: 10;
  border-radius: 100%;
`;

export const LoadingPlate = styled.div`
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10em;
  width: 10em;
  background: url("/assets/logos/logo1.png") no-repeat;
  background-size: cover;
  border-radius: 100%;
  animation: ${rotate} 1.5s linear infinite;
`;
