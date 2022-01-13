import { useState } from "react";
import styled from "styled-components";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import GlobalStyles from "./style/globalStyles";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Drawer from "@material-ui/core/Drawer";
import Cart from "./components/cart/Cart";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { StyledButton } from "./style/buttons";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => null;
  const handleRemoveFromCart = () => null;

  const getTotalItems = () => null;

  return (
    <Router>
      <GlobalStyles />
      {/* <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          // cartItems={cartItems}
          // addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
        <button onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </button>
      </Drawer> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

const Container = styled.div``;
