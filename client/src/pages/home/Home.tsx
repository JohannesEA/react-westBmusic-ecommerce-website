import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import About from "./About";
import WorkProcess from "./WorkProcess";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
      <WorkProcess />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
