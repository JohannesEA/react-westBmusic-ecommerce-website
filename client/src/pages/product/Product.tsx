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
import SecondNavbar from "../../components/navbar/SecondNavbar";
import { CartItemType } from "../../App";
import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { AiFillPlayCircle, AiOutlinePlayCircle } from "react-icons/ai";

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
          <Text>Beskrivelse: {item.description}</Text>
        </ProductDescription>

        <ProductDescription>
          <Text>Kategori: {item.category}</Text>
        </ProductDescription>

        <ProductDescription>
          <Text>Pris: {item.price}</Text>
        </ProductDescription>

        <Buttons>
          <AiOutlinePlayCircle fontSize={50} />

          <BsCartPlus fontSize={50} />
        </Buttons>
      </ProductContainer>
    </Wrapper>
  );
};

export default ProductList;
