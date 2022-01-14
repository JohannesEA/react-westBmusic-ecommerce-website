import { Wrapper, ProductListContainer } from "./ProductList.styles";
import { BEATS } from "../../../dummydata/dummy";
import ProductBox from "../../../components/contentBoxes/ProductBox";
import { Headline } from "../../../style/text";

type Props = {};

const ProductList = () => {
  // const beats = BEATS as const;

  return (
    <Wrapper id="hero">
      <Headline>Beats</Headline>
      <ProductListContainer>
        {BEATS.map((beat) => (
          <ProductBox key={beat.id} item={beat} />
        ))}
      </ProductListContainer>
    </Wrapper>
  );
};

export default ProductList;
