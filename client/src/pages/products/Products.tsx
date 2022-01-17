import { Wrapper } from "./Products.styles";
import ProductList from "./productlist/ProductList";
import SecondNavbar from "../../components/navbar/SecondNavbar";
import { Product } from "../../models/Product";

type Props = {
  addToCart: (clickedItem: Product) => void;
};

const Products: React.FC<Props> = ({ addToCart }) => {
  return (
    <Wrapper>
      <SecondNavbar />
      <ProductList addToCart={addToCart} />
    </Wrapper>
  );
};

export default Products;
