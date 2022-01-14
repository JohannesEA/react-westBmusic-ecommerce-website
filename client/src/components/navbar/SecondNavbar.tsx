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
import { Link as DomLink } from "react-router-dom";

const SecondNavbar = () => {
  const { width } = getWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  return (
    <Container id="navbar">
      <DomLink to="/">
        <MenuLogoText onClick={() => setOpen(!isOpen)}>WestBMusic</MenuLogoText>
      </DomLink>

      {width < 800 && (
        <HamburgerContainer>
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
