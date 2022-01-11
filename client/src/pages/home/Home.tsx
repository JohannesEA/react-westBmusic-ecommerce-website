import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import About from "./About";
import WorkProcess from "./WorkProcess";
import { HERO, ABOUT } from "../../dummydata/dummy";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero content={HERO} />
      <About content={ABOUT} />
      <WorkProcess />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
