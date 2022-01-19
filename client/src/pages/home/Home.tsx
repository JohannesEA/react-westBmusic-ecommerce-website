// //functions/hooks
// import { getContent } from "../../apihandling/apiCalls";
// import { useState, useEffect } from "react";

// //Styles
// import { PRODUCTSECTION } from "../../dummydata/dummy";

// //components
// import Hero from "./hero/Hero";
// import About from "./about/About";
// import WorkProcess from "./workprocess/WorkProcess";
// import Products from "../../pages/home/products/Products";
// import Contact from "./contact/Contact";
// import Navbar from "../../components/navbar/Navbar";

// //types
// import { Product } from "../../models/Product";
// import { Content } from "../../models/Content";

// type Props = {
//   addToCart: (clickedItem: Product) => void;
// };

// const Home: React.FC<Props> = ({ addToCart }) => {
//   const [contents, setContents] = useState([] as Content[]);

//   useEffect(() => {
//     const getAllContent = async () => {
//       getContent().then((c) => {
//         setContents(c as Content[]);
//       });
//     };

//     getAllContent();
//   }, []);

//   const img = contents[0]?.heroimg;

//   // console.log(img);
//   return (
//     <div>
//       <Navbar />
//       {
//         contents.length > 0 && (
//           <Hero image={contents.length > 0 ? img : "/assets/images/img2.jpg"} />
//         )
//         /* <About
//         title={contents[0].abouttitle}
//         undertitle={contents[0].aboutdesc}
//         image={contents[0].aboutimg}
//       />
//       <WorkProcess
//         title={contents[0].workprocestitle}
//         p1={contents[0].workprocessone}
//         p2={contents[0].workprocesstwo}
//         p3={contents[0].workprocessthree}
//         p4={contents[0].workprocessfour}
//       /> */
//       }
//       <Products title={PRODUCTSECTION[0].title} addToCart={addToCart} />
//       <Contact />
//     </div>
//   );
// };

// export default Home;

import styled from "styled-components";
import Hero from "./hero/Hero";
import About from "./about/About";
import WorkProcess from "./workprocess/WorkProcess";
import { HERO, ABOUT, WORK, PRODUCTSECTION } from "../../dummydata/dummy";
import Products from "../../pages/home/products/Products";
import Contact from "./contact/Contact";
import Navbar from "../../components/navbar/Navbar";
import { Product } from "../../models/Product";

type Props = {
  addToCart: (clickedItem: Product) => void;
};

const Home: React.FC<Props> = ({ addToCart }) => {
  return (
    <Container>
      <Navbar />
      <Hero image={HERO[0].image} />
      <About
        title={ABOUT[0].title}
        undertitle={ABOUT[0].undertitle}
        image={ABOUT[0].image}
      />
      <WorkProcess
        title={WORK[0].title}
        p1={WORK[0].p1}
        p2={WORK[0].p2}
        p3={WORK[0].p3}
        p4={WORK[0].p4}
      />
      <Products title={PRODUCTSECTION[0].title} addToCart={addToCart} />
      <Contact />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
