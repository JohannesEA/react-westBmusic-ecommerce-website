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
import { CartItemType } from "../../App";
import React from "react";

// type Props = {
//   item: CartItemType[];
// };

const ProductList = () => {
  const item = BEATS[0];
  return (
    <Wrapper id="hero">
      <SecondNavbar />
      <Headline>{item.title}</Headline>
      <ProductContainer>
        <ImageContainer>
          <Image src={item.image} alt={item.image} />
        </ImageContainer>

        <ProductDescription>
          <Text>Description: {item.description}</Text>
        </ProductDescription>

        <ProductDescription>
          <Text>Category: {item.category}</Text>
        </ProductDescription>

        <ProductDescription>
          <Text>Price: {item.price}</Text>
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
