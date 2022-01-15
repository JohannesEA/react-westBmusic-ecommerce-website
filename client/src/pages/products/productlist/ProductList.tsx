import { Wrapper, ProductListContainer } from "./ProductList.styles";
import { BEATS } from "../../../dummydata/dummy";
import ProductBox from "../../../components/contentBoxes/ProductBox";
import { Headline } from "../../../style/text";
import { CartItemType } from "../../../App";

type Props = {
  addToCart: (clickedItem: CartItemType) => void;
};

const ProductList: React.FC<Props> = ({ addToCart }) => {
  // const beats = BEATS as const;

  return (
    <Wrapper id="hero">
      <Headline>Beats</Headline>
      <ProductListContainer>
        {BEATS.map((beat) => (
          <ProductBox key={beat.id} clickedItem={beat} addToCart={addToCart} />
        ))}
      </ProductListContainer>
    </Wrapper>
  );
};

export default ProductList;
