import React from "react";
import ItemCarouselle from "../../../components/itemCarouselle/ItemCarouselle";
import { Headline } from "../../../style/text";

type Props = {
  title: string;
};

const Products: React.FC<Props> = ({ title }) => {
  return (
    <div className="products-container">
      <Headline>{title}</Headline>
      <br />
      <ItemCarouselle />
    </div>
  );
};

export default Products;
