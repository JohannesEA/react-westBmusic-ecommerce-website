import React from "react";

//Components
import CartItem from "./CartItem";

//Types
import { CartItemType } from "../../App";

//Styles
import { Wrapper } from "./Cart.styles";

//Dummydata
import { BEATS } from "../../dummydata/dummy";

type Props = {
  cartItems: CartItemType[];
  removeFromCart: (item: CartItemType) => void;
};

const Cart: React.FC<Props> = ({ cartItems, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) => null;
  // items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  // const beats = BEATS as CartItemType[];

  return (
    <Wrapper>
      <h1>Din Handlekurv</h1>
      {cartItems.length === 0 ? <p>Ingen produkter i handlekurven</p> : null}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <h2>Total pris: {calculateTotal(cartItems)} ,-</h2>
    </Wrapper>
  );
};

export default Cart;
