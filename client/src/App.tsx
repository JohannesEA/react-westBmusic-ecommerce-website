import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//Components
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import GlobalStyles from "./style/globalStyles";
import Footer from "./components/footer/Footer";
import Drawer from "@material-ui/core/Drawer";
import Cart from "./components/cart/Cart";
import Badge from "@material-ui/core/Badge";
import Confirm from "./pages/confirm/Confirm";
import Error from "./pages/error/Error";
import LoadingPage from "./components/loading/LoadingPage";

//styles
import { CartButton, DeleteButton } from "./style/buttons";
import { useQuery } from "react-query";
import { BsCart } from "react-icons/bs";
import Login from "./pages/login/Login";
import AdminHome from "./pages/admin/AdminHome";

export type CartItemType = {
  _id: number;
  title: string;
  image: string;
  price: number;
  mp3: string;
  description: string;
  categories: Array<string>;
};

//Call api
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://westbmusic.herokuapp.com/api/products")).json();

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated")
  );

  const getTotalItems = () => cartItems.length;

  const handleRemoveFromCart = (item: CartItemType) => {
    var index = cartItems.indexOf(item);
    if (index !== -1) {
      alert(`Produktet ${item.title} er fjernet fra handlekurven`);
      cartItems.splice(index, 1);
      setCartItems(cartItems);
    }
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      //1. Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item._id === clickedItem._id);
      if (isItemInCart) {
        alert("Product er allerede i handlekurven..");
        return prev.map((item) =>
          item._id === clickedItem._id ? { ...item } : item
        );
      }
      //2. First time the item is added
      alert(`Productet ${clickedItem.title} er lagt til i handlekurven.`);

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  useEffect(() => {
    const set = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated"));
    };
    set();
  }, [isAuthenticated]);

  useEffect(() => {
    let timer1 = setTimeout(
      () => localStorage.setItem("isAuthenticated", "false"),
      1800000
    );
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  if (isLoading) return <LoadingPage />;

  console.log("User logged in: ", isAuthenticated);

  return (
    <Router>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <DeleteButton onClick={() => setCartOpen(false)}>X</DeleteButton>
        <Cart cartItems={cartItems} removeFromCart={handleRemoveFromCart} />
      </Drawer>

      <CartButton className="kc_fab_main_btn" onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems()} color="error">
          <BsCart fontSize="20px" />
        </Badge>
      </CartButton>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home addToCart={handleAddToCart} />} />
        <Route
          path="/products"
          element={<Products addToCart={handleAddToCart} />}
        />
        <Route
          path="/products/:id"
          element={<Product addToCart={handleAddToCart} />}
        />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            isAuthenticated === "true" ? (
              <AdminHome />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

const Container = styled.div``;
