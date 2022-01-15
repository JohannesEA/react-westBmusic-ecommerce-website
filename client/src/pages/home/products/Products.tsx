import React from "react";
import ItemCarouselle from "../../../components/itemCarouselle/ItemCarouselle";
import { Headline } from "../../../style/text";
import { Wrapper } from "./Products.styles";
import { CartItemType } from "../../../App";

type Props = {
  title: string;
  addToCart: (clickedItem: CartItemType) => void;
};

const Products: React.FC<Props> = ({ title, addToCart }) => {
  return (
    <Wrapper id="products">
      <Headline>{title}</Headline>
      <br />
      <ItemCarouselle addToCart={addToCart} />
    </Wrapper>
  );
};

export default Products;
