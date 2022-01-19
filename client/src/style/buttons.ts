import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { colorChange } from "../animations/animations";

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  z-index: 101;
  color: #fff;
  background: transparent;
  border: none;
  outline: none;
  border-radius: 0.5em;
  margin: 0px;
  right: 20px;
  top: 24px;
  left: auto;
  position: fixed;

  &:hover {
    box-shadow: 1px 1px 0.2px 0.5px var(--color-text);
    animation: ${colorChange} 1.5s infinite;
  }
`;

export const DeleteButton = styled.button`
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 2em;
  position: fixed;
  text-align: center;
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

export const LogoutButton = styled.button`
  z-index: 8;
  min-height: 3em;
  min-width: 10em;
  max-height: 1.5em;
  border: none !important;
  width: 30%;
  height: 15%;
  margin: 8em auto 0 auto !important;
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

export const StyledBlueButton = styled(IconButton)`
  z-index: 8;
  height: 1.5em;
  min-width: 6em;
  max-width: 10em;
  margin: 0 auto !important;
  background-color: rgba(6, 42, 75, 0.7) !important;
  color: var(--color-text) !important;
  border-radius: 0.5em !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: rgba(6, 42, 75, 1) !important;
    border-radius: 0em !important;
  }
`;

export const StyledOrangeButton = styled(IconButton)`
  z-index: 8;
  height: 1.5em;
  min-width: 6em;
  max-width: 10em;
  margin: 0 auto;
  background-color: rgba(255, 91, 36, 0.7) !important;
  color: var(--color-text) !important;
  border-radius: 0.5em !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: rgba(255, 91, 36, 1) !important;
    border-radius: 0em !important;
  }
`;

export const StyledTransparentButton = styled(IconButton)`
  z-index: 8;
  min-height: 3em;
  min-width: 10em;
  width: 40% !important;
  height: 15% !important;
  background-color: rgba(6, 42, 75, 0.7) !important;
  color: var(--color-text) !important;
  border-radius: 0.5em !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: rgba(6, 42, 75, 1) !important;
    border-radius: 0em !important;
  }
`;
