//functions
import { getContent } from "../../apihandling/apiCalls";
import { useState, useEffect } from "react";

//styles
import styled from "styled-components";

//components
import Hero from "./hero/Hero";
import About from "./about/About";
import WorkProcess from "./workprocess/WorkProcess";
import Products from "../../pages/home/products/Products";
import Contact from "./contact/Contact";
import Navbar from "../../components/navbar/Navbar";
//dummydata
import { HERO, ABOUT, WORK, PRODUCTSECTION } from "../../dummydata/dummy";

//types
import { Product } from "../../models/Product";
import { Content } from "../../models/Content";

type Props = {
  addToCart: (clickedItem: Product) => void;
};

const Home: React.FC<Props> = ({ addToCart }) => {
  const [contents, setContents] = useState([] as Content[]);

  useEffect(() => {
    getContent().then((c) => {
      setContents(c as Content[]);
    });
  }, [null]);

  return (
    <Container>
      <Navbar />
      <Hero
        // image={
        //   contents[0]?.heroimg !== undefined
        //     ? contents[0].heroimg
        //     : "/assets/images/img2.jpg"
        // }
        image={"/assets/images/img2.jpg"}
      />
      <About
        title={contents[0]?.abouttitle}
        undertitle={contents[0]?.aboutdesc}
        image={ABOUT[0].image}
      />
      <WorkProcess
        title={WORK[0].title}
        p1={contents[0]?.workprocessone}
        p2={contents[0]?.workprocesstwo}
        p3={contents[0]?.workprocessthree}
        p4={contents[0]?.workprocessfour}
      />
      <Products title={PRODUCTSECTION[0].title} addToCart={addToCart} />
      <Contact />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
