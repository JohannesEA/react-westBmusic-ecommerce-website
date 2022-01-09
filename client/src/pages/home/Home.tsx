import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
