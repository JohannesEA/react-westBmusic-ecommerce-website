import styled, { keyframes } from "styled-components";
import { Spiral as Hamburger } from "hamburger-react";
import getWindowDimensions from "../../common/Dimentions";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const { width } = getWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  return (
    <Container>
      <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>
        {/* <Logo src="/assets/logos/logo3.png" alt="nav-logo" /> */}
        <MenuLogoText>WestBMusic</MenuLogoText>
      </Link>

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
          <Link
            to="/hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            {" "}
            <Menulink onClick={() => setOpen(!isOpen)}>Hjem</Menulink>
          </Link>
          <Link
            to="/about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            {" "}
            <Menulink onClick={() => setOpen(!isOpen)}>Om</Menulink>
          </Link>
          <Link
            to="/products"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            {" "}
            <Menulink onClick={() => setOpen(!isOpen)}>Beats</Menulink>
          </Link>
          <Link
            to="/contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            {" "}
            <Menulink onClick={() => setOpen(!isOpen)}>Kontakt</Menulink>
          </Link>
        </Menu>
      )}
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
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
