import {
  Wrapper,
  ProductContainer,
  ImageContainer,
  ProductDescription,
  Image,
  Buttons,
} from "./Product.styles";
import { BEATS } from "../../dummydata/dummy";
import { Headline, Text } from "../../style/text";
import { StyledButtonSix, StyledButtonFour } from "../../style/buttons";
import { AiFillPlayCircle } from "react-icons/ai";
import SecondNavbar from "../../components/navbar/SecondNavbar";

type Props = {};

const ProductList = () => {
  return (
    <Wrapper id="hero">
      <SecondNavbar />
      <Headline>{BEATS[0].title}</Headline>
      <ProductContainer>
        <ImageContainer>
          <Image src={BEATS[0].image} alt={BEATS[0].image} />
        </ImageContainer>

        <ProductDescription>
          <Text>Description: {BEATS[0].description}</Text>
        </ProductDescription>

        <ProductDescription>
          <Text>Category: {BEATS[0].category}</Text>
        </ProductDescription>

        <ProductDescription>
          <Text>Price: {BEATS[0].price}</Text>
        </ProductDescription>

        <Buttons>
          <StyledButtonFour>
            <AiFillPlayCircle fontSize={35} />
          </StyledButtonFour>
          <StyledButtonSix>Legg til i handleliste</StyledButtonSix>
        </Buttons>
      </ProductContainer>
    </Wrapper>
  );
};

export default ProductList;
