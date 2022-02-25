//hooks
import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

//Components
import ProductBox from "../../../components/contentBoxes/ProductBox";

//Styles
import { Wrapper, ProductListContainer } from "./ProductList.styles";
import { Headline } from "../../../style/text";
import { Input } from "../../../style/forms";

//types
import { Product } from "../../../models/Product";

type Props = {
  addToCart: (clickedItem: Product) => void;
};

const ProductList: React.FC<Props> = ({ addToCart }) => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([] as Product[]);

  const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `https://westbmusic.herokuapp.com/api/products?category=${category.toLowerCase()}`
            : "https://westbmusic.herokuapp.com/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  return (
    <Wrapper id="hero">
      <Headline>Beats</Headline>
      <Input
        onChange={handleChangeCategory}
        placeholder="søk etter kategori.. eks: hiphop"
      ></Input>
      <ProductListContainer>
        {products?.map((beat) => (
          <ProductBox
            key={beat.title}
            clickedItem={beat}
            addToCart={addToCart}
          />
        ))}
      </ProductListContainer>
    </Wrapper>
  );
};

export default ProductList;
