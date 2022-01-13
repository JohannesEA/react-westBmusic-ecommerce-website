import React from "react";
import ItemCarouselle from "../../../components/itemCarouselle/ItemCarouselle";
import { Headline } from "../../../style/text";
import { Wrapper } from "./Products.styles";

type Props = {
  title: string;
};

const Products: React.FC<Props> = ({ title }) => {
  return (
    <Wrapper>
      <Headline>{title}</Headline>
      <br />
      <ItemCarouselle />
    </Wrapper>
  );
};

export default Products;
