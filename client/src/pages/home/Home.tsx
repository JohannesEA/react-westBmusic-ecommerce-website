import styled from "styled-components";
import Hero from "./hero/Hero";
import About from "./about/About";
import WorkProcess from "./workprocess/WorkProcess";
import { HERO, ABOUT, WORK, PRODUCTSECTION } from "../../dummydata/dummy";
import Products from "../../pages/home/products/Products";
import Contact from "./contact/Contact";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero
        title={HERO[0].title}
        undertitle={HERO[0].undertitle}
        image={HERO[0].image}
      />
      <About
        title={ABOUT[0].title}
        undertitle={ABOUT[0].undertitle}
        image={ABOUT[0].image}
      />
      <WorkProcess
        title={WORK[0].title}
        undertitle={WORK[0].undertitle}
        p1={WORK[0].p1}
        p2={WORK[0].p2}
        p3={WORK[0].p3}
        p4={WORK[0].p4}
      />
      <Products title={PRODUCTSECTION[0].title} />
      <Contact />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
