import styled, { keyframes } from "styled-components";
import getWindowDimensions from "../common/Dimentions";
import { Link } from "react-scroll";
import { SmallText } from "../style/text";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  const { width } = getWindowDimensions();

  return (
    <>
      <Container>
        {width > 800 ? (
          <>
            <InnerContainer>
              <SmallText>
                Vi lager beats som er perfekt for dine prosjekter.
              </SmallText>
            </InnerContainer>

            <InnerContainer>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                <Logo>WestBMusic</Logo>
              </Link>
            </InnerContainer>
            <InnerContainer>
              <Payment
                className="payment-logo"
                src="https://i.ibb.co/Qfvn4z6/payment.png"
              />
            </InnerContainer>
          </>
        ) : (
          <>
            <InnerContainer>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                <Logo>WestBMusic</Logo>
              </Link>
            </InnerContainer>

            <InnerContainer>
              <SmallText>
                Vi lager beats som er perfekt for dine prosjekter.
              </SmallText>
            </InnerContainer>

            <InnerContainer>
              <SmallText>
                <Payment
                  className="payment-logo"
                  src="https://i.ibb.co/Qfvn4z6/payment.png"
                />{" "}
              </SmallText>
            </InnerContainer>
          </>
        )}
      </Container>
      <Copyright>
        <SmallText>WestBMusic</SmallText> <AiOutlineCopyright fontSize={20} />{" "}
        <SmallText>2022</SmallText>
      </Copyright>
    </>
  );
};

export default Footer;

const Container = styled.div`
  display: grid;
  min-height: 30vh;
  z-index: 1000;
  background-color: var(--color-2);
  grid-template-columns: repeat(3, 2fr);
  @media (max-width: 800px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, 2fr);
  }
`;

const Logo = styled.h1`
  margin: auto 1.2rem;
  font-size: 1.5rem;
  color: #032859;
  transition: all 0.3s ease;
  font-family: "Licorice", cursive;
  @media (max-width: 800px) {
    font-size: 1.2rem;
    margin: 1.2rem;
  }
`;

const InnerContainer = styled.div`
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  background-color: ${(prop) => prop.color};
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  background-color: var(--color-2);
`;

const Payment = styled.img`
  @media (max-width: 800px) {
    width: 30vh;
  }

  @media (max-width: 250px) {
    width: 20vh;
  }
`;
