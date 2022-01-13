import { Wrapper } from "./Products.styles";
import ProductList from "./productlist/ProductList";
import SecondNavbar from "../../components/navbar/SecondNavbar";

const Products = () => {
  return (
    <Wrapper>
      <SecondNavbar />
      <ProductList />
    </Wrapper>
  );
};

export default Products;
