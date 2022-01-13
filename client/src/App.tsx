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
import Confirm from "./pages/confirm/Confirm";
import Error from "./pages/error/Error";
import { useQuery } from "react-query";
import LinearProgress from "@material-ui/core/LinearProgress";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { BsCartPlus } from "react-icons/bs";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

//Call api
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https:/fakestoreapi.com/products")).json();

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      //1. Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev;
      }
      //2. First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            return ack;
          } else {
            return [...ack, { ...item, amount: item.amount - 1 }];
          }
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  // if (isLoading) return <LinearProgress />;

  if (error) return <Home />;
  return (
    <Router>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>

      <button className="kc_fab_main_btn" onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <BsCartPlus />
        </Badge>
      </button>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

const Container = styled.div``;
