import React from "react";

//Components
import CartItem from "./CartItem";

//Types
import { CartItemType } from "../../App";

//Styles
import { Wrapper, Buttons } from "./Cart.styles";
import { StyledButtonSix, StyledButtonFour } from "../../style/buttons";

//Dummydata
import { BEATS } from "../../dummydata/dummy";

type Props = {
  cartItems: CartItemType[];
  removeFromCart: (item: CartItemType) => void;
};

const Cart: React.FC<Props> = ({ cartItems, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) => {
    var price = 0;
    for (var i = 0; i < items.length; i++) {
      price += items[i].price;
    }

    return price;
  };

  return (
    <Wrapper>
      <h1>Din Handlekurv</h1>
      {cartItems.length === 0 ? <p>Ingen produkter i handlekurven</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={() => removeFromCart(item)}
        />
      ))}
      <h2>Total pris: {calculateTotal(cartItems)} NOK</h2>

      <Buttons>
        <StyledButtonFour>Sjekk ut</StyledButtonFour>
        <StyledButtonFour>Vipps</StyledButtonFour>
      </Buttons>
    </Wrapper>
  );
};

export default Cart;
