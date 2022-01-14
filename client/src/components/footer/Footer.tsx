import styled, { keyframes } from "styled-components";
import getWindowDimensions from "../../common/Dimentions";
import { Link } from "react-scroll";
import { SmallText } from "../../style/text";
import { AiOutlineCopyright } from "react-icons/ai";
import { Link as DomLink } from "react-router-dom";

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
        <Copy>
          {" "}
          WestBMusic <AiOutlineCopyright fontSize={20} /> 2022
        </Copy>
        <DomLink to="/login">
          <SmallText style={{ cursor: "pointer" }}>Admin</SmallText>
        </DomLink>
      </Copyright>
      <CopyrightTwo>
        <SmallText
          onClick={() => (window.location.href = "https://mojo-websites.no/")}
          style={{ cursor: "pointer" }}
        >
          Website Created By mojo-websites.no
        </SmallText>
      </CopyrightTwo>
    </>
  );
};

export default Footer;

const Container = styled.div`
  display: grid;
  min-height: 30vh;
  z-index: 1000;
  background-color: var(--color-1);
  grid-template-columns: repeat(3, 2fr);
  border-top: 5px solid var(--color-6);
  @media (max-width: 800px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, 2fr);
  }
`;

const Logo = styled.h1`
  cursor: pointer;
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

const InnerContainer = styled.div`
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  height: 100%;
  background-color: ${(prop) => prop.color};
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  min-height: 5vh;
  background-color: var(--color-1);
  color: var(--color-text);
`;

const CopyrightTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 5vh;
  background-color: var(--color-6);
  color: var(--color-text);
`;

const Payment = styled.img`
  @media (max-width: 800px) {
    width: 30vh;
  }

  @media (max-width: 250px) {
    width: 20vh;
  }
`;

const Copy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
