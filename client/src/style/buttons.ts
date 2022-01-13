import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const StyledButtonOne = styled(IconButton)`
  position: fixed;
  z-index: 100;
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
  position: fixed;
  z-index: 100;
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
  position: fixed;
  z-index: 100;
  min-height: 1.5em;
  min-width: 10em;
  width: 40%;
  height: 15%;
  margin-bottom: 1em !important;
  background-color: RGBA(0, 0, 0, 0.5) !important;
  color: var(--color-text) !important;
  border-radius: 0.5em !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: RGBA(0, 0, 0, 0.7) !important;
    border-radius: 0em !important;
  }
`;

export const StyledButtonFour = styled(IconButton)`
  position: fixed;
  z-index: 100;
  min-height: 1.5em;
  min-width: 5em;
  width: 30%;
  height: 15%;
  margin-bottom: 1em !important;
  background-color: RGBA(0, 0, 0, 0.5) !important;
  color: var(--color-text) !important;
  border-radius: 0.5em !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: RGBA(0, 0, 0, 0.7) !important;
    border-radius: 0em !important;
  }
`;

export const StyledButtonFive = styled(IconButton)`
  position: fixed;
  z-index: 100;
  min-height: 1.5em;
  max-height: 2em;
  min-width: 4em;
  max-width: 6em;
  width: 30%;
  height: 15%;
  margin: 0 auto 0 auto !important;

  background-color: RGBA(0, 0, 0, 0.5) !important;
  color: var(--color-text) !important;
  border-radius: 0.5em !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: RGBA(0, 0, 0, 0.7) !important;
    border-radius: 0em !important;
  }
`;