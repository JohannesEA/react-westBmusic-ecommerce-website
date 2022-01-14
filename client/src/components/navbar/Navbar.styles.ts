import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: fixed !important;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  width: 100%;
  margin: 0 auto;
  z-index: 10;
  background-color: var(--color-1);
  position: relative;
`;

export const animationOne = keyframes`
0%{
  opacity: 0;
},
100%{
  opacity: 1;
}
`;

export const Menu = styled.div`
  display: flex;
  background-color: var(--color-1);
  flex-direction: row;
  z-index: 9;
  margin-right: 3em;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 40vh;
    position: absolute;
    top: 5em;
    left: auto;
    animation: ${animationOne} 0.2s linear;
  }
`;

export const Menulink = styled.p`
  margin: auto 1.2rem;
  font-size: 1.3rem;
  cursor: pointer;
  color: var(--color-text);
  &:hover {
    color: var(--color-text-hover);
  }
  @media (max-width: 800px) {
    margin: 1.1rem;
  }
`;

export const HamburgerContainer = styled.div`
  margin: auto 1.2rem;
  margin-right: 4em !important;

  @media (max-width: 800px) {
    margin: 1.2rem;
  }
`;

export const MenuLogoText = styled.h1`
  margin: auto 1.2rem;
  font-size: 1.5rem;
  color: var(--color-text);
  transition: all 0.3s ease;
  font-family: "Licorice", cursive;
  @media (max-width: 800px) {
    font-size: 1.2rem;
    margin: 1.2rem;
  }
`;
