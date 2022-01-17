import {
  Container,
  Menu,
  Menulink,
  HamburgerContainer,
  MenuLogoText,
} from "./Navbar.styles";
import { Spiral as Hamburger } from "hamburger-react";
import getWindowDimensions from "../../common/Dimentions";
import { useState } from "react";
import { Link } from "react-scroll";
import { Link as DomLink } from "react-router-dom";

const Navbar = () => {
  const { width } = getWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  return (
    <Container id="navbar">
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
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>
            {" "}
            <Menulink onClick={() => setOpen(!isOpen)}>Hjem</Menulink>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            {" "}
            <Menulink onClick={() => setOpen(!isOpen)}>Om</Menulink>
          </Link>
          <DomLink to="/products">
            <Menulink onClick={() => setOpen(!isOpen)}>Beats</Menulink>
          </DomLink>
          <Link
            to="contact"
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
