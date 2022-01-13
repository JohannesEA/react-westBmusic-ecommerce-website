import styled, { keyframes } from "styled-components";
import { Spiral as Hamburger } from "hamburger-react";
import getWindowDimensions from "../../common/Dimentions";
import { useState, useEffect } from "react";
import { Link as DomLink } from "react-router-dom";

const SecondNavbar = () => {
  const { height, width } = getWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  return (
    <Container id="navbar">
      <DomLink to="/">
        <Menulink onClick={() => setOpen(!isOpen)}>WestBMusic</Menulink>
      </DomLink>

      {width < 800 && (
        <HamburgerContainer>
          {" "}
          <Hamburger
            label="Show menu"
            size={40}
            toggled={isOpen}
            toggle={setOpen}
            color="#fff"
          ></Hamburger>
        </HamburgerContainer>
      )}

      {(isOpen || width > 800) && (
        <Menu>
          <DomLink to="/">
            <Menulink onClick={() => setOpen(!isOpen)}>Hjem</Menulink>
          </DomLink>
          <DomLink to="/">
            <Menulink onClick={() => setOpen(!isOpen)}>Om</Menulink>
          </DomLink>
          <DomLink to="/products">
            <Menulink onClick={() => setOpen(!isOpen)}>Beats</Menulink>
          </DomLink>
          <DomLink to="/">
            <Menulink onClick={() => setOpen(!isOpen)}>Kontakt</Menulink>
          </DomLink>
        </Menu>
      )}
    </Container>
  );
};

export default SecondNavbar;

const Container = styled.div`
  position: fixed !important;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  width: 100%;
  margin: 0 auto;
  z-index: 1000;
  background-color: var(--color-1);
  position: relative;
`;

const animationOne = keyframes`
0%{
  opacity: 0;
},
100%{
  opacity: 1;
}
`;

const Menu = styled.div`
  display: flex;
  background-color: var(--color-1);
  flex-direction: row;
  z-index: 999;

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

const Menulink = styled.p`
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

const HamburgerContainer = styled.div`
  margin: auto 1.2rem;
  @media (max-width: 800px) {
    margin: 1.2rem;
  }
`;

const MenuLogoText = styled.h1`
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
