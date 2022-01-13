import { Wrapper, ProductListContainer } from "./ProductList.styles";
import { BEATS } from "../../../dummydata/dummy";
import ProductBox from "../../../components/contentBoxes/ProductBox";
import { Headline } from "../../../style/text";

type Props = {};

const ProductList = () => {
  return (
    <Wrapper>
      <Headline>Beats</Headline>
      <ProductListContainer>
        {BEATS.map((beat) => (
          <ProductBox
            key={beat.title}
            title={beat.title}
            image={beat.image}
            details={beat.details}
            category={beat.category}
            price={beat.price}
          />
        ))}
      </ProductListContainer>
    </Wrapper>
  );
};

export default ProductList;
