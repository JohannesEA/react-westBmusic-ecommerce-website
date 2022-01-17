//Components
import ProductBox from "../../../components/contentBoxes/ProductBox";

//Styles
import { Wrapper, ProductListContainer } from "./ProductList.styles";
import { Headline } from "../../../style/text";

//types
import { Product } from "../../../models/Product";
import { useQuery } from "react-query";

type Props = {
  addToCart: (clickedItem: Product) => void;
};

//Call api
const getProducts = async (): Promise<Product[]> =>
  await (await fetch("https://westbmusic.herokuapp.com/api/products")).json();

const ProductList: React.FC<Props> = ({ addToCart }) => {
  const { data, isLoading, error } = useQuery<Product[]>(
    "products",
    getProducts
  );

  return (
    <Wrapper id="hero">
      <Headline>Beats</Headline>
      <ProductListContainer>
        {data?.map((beat) => (
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
