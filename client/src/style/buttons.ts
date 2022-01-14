import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { colorChange } from "../animations/animations";

export const StyledButton = styled.button`
  z-index: 8;
  height: 2em;
  width: 2em;
  margin-bottom: 1em !important;
  background-color: lightblue !important;
  right: 20px !important;
  left: 95% !important;
`;

export const StyledButtonOne = styled.button`
  z-index: 8;
  height: 1.5em;
  width: 4em;
  margin-bottom: 1em !important;
  background-color: #10101c !important;
  border-radius: 0.5em !important;
  color: white !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: var(--color-1-hover) !important;
    border-radius: 0em !important;
  }
`;

export const StyledButtonTwo = styled(IconButton)`
  z-index: 8;
  height: 1.5em;
  width: 4em;
  margin-bottom: 1em !important;
  background-color: var(--color-6) !important;
  color: var(--color-text) !important;
  border-radius: 0.5em !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: var(--color-6-hover) !important;
    border-radius: 0em !important;
  }
`;

export const StyledButtonThree = styled(IconButton)`
  z-index: 8;
  min-height: 1.5em;
  min-width: 10em;
  width: 40%;
  height: 15%;
  margin-bottom: 1em !important;
  background-color: rgba(6, 42, 75, 0.7) !important;
  color: var(--color-text) !important;
  border-radius: 0.5em !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: rgba(6, 42, 75, 1) !important;
    border-radius: 0em !important;
  }
`;

export const StyledButtonFour = styled(IconButton)`
  z-index: 8;
  min-height: 1.5em;
  min-width: 5em;
  max-height: 1.5em;
  width: 30%;
  height: 15%;
  margin-bottom: 1em !important;
  background-color: var(--color-6) !important;
  color: var(--color-text) !important;
  border-radius: 0.5em !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: var(--color-6-hover) !important;
    border-radius: 0em !important;
  }
`;

export const StyledButtonFive = styled(IconButton)`
  z-index: 8;
  min-height: 1.5em;
  max-height: 1.8em;

  min-width: 4em;
  max-width: 6em;
  width: 30%;
  height: 15%;
  margin: 0 auto 0 auto !important;

  background-color: var(--color-6) !important;
  color: var(--color-text) !important;
  border-radius: 0.5em !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: var(--color-6-hover) !important;
    border-radius: 0em !important;
  }
`;

export const StyledButtonSix = styled(IconButton)`
  z-index: 8;
  min-height: 1.5em;
  min-width: 10em;
  max-height: 1.5em;
  width: 30%;
  height: 15%;
  margin-bottom: 1em !important;
  background-color: var(--color-6) !important;
  color: var(--color-text) !important;
  border-radius: 0.5em !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: var(--color-6-hover) !important;
    border-radius: 0em !important;
  }

  @media (max-width: 800px) {
    min-width: 8em;
    max-height: 2.5em;
  }
`;

export const CartButton = styled.button`
  margin-top: -57px !important;
  width: 30px;
  height: 30px;
  z-index: 101;
  position: fixed;
  color: #fff;
  background: transparent;
  border: none;
  outline: none;
  border-radius: 0.5em;
  margin: 0 0 0 45%;

  &:hover {
    box-shadow: 1px 1px 0.2px 0.5px var(--color-text);
    animation: ${colorChange} 1.5s infinite;
  }

  @media (max-width: 800px) {
    margin: 0 0 0 48%;
  }

  @media (max-width: 450px) {
    margin: 0 0 0 46%;
  }
`;

export const DeleteButton = styled.button`
  z-index: 1000;
  width: 2em;
  height: 2em;
  position: fixed;
  margin: 0.2em;
  color: #fff;
  box-shadow: 0.5px 0.5px 0.2px 0.5px var(--color-text);
  background-color: #1e1e35;
  border: none;
  outline: none;
  border-radius: 0.5em;

  &:hover {
    box-shadow: 1px 1px 0.2px 0.5px var(--color-text);
    animation: ${colorChange} 1.5s infinite;
  }
`;
