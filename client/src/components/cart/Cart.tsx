import React from "react";

//Components
import CartItem from "./CartItem";

//Types
import { Product } from "../../models/Product";

//Styles
import { Wrapper, Buttons } from "./Cart.styles";
import { StyledButtonFour } from "../../style/buttons";

type Props = {
  cartItems: Product[];
  removeFromCart: (item: Product) => void;
};

const Cart: React.FC<Props> = ({ cartItems, removeFromCart }) => {
  const calculateTotal = (items: Product[]) => {
    var price = 0;
    for (var i = 0; i < items.length; i++) {
      if (items[i].price !== undefined) {
        price += items[i].price;
      }
    }

    return price;
  };

  return (
    <Wrapper>
      <h1>Din Handlekurv</h1>
      {cartItems.length === 0 ? <p>Ingen produkter i handlekurven</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item._id}
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
