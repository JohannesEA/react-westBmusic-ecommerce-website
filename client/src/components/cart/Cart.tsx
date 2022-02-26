import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
//Components
import CartItem from "./CartItem";

//Types
import { Product } from "../../models/Product";

//Styles
import { Wrapper, Buttons } from "./Cart.styles";
import { StyledBlueButton, StyledOrangeButton } from "../../style/buttons";

type Props = {
  cartItems: Product[];
  removeFromCart: (item: Product) => void;
};

// const KEY = process.env.STRIPE_KEY as string;
const stripeKey = loadStripe(
  "pk_test_51JwS4BDJ6KD8X4jUYGm2VeyofI9YOdonXbCHy3GB12JGM3gPHdY7l3qi9cd7fAvMsTtmiZdu0sjZWy20SxAghpui007JvXEC6j"
);

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

  const handleVippsCheckout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/checkout/vipps/payment"
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <h1>Din Handlekurv</h1>
      {cartItems.length === 0 ? (
        <p>Ingen produkter i handlekurven</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              removeFromCart={() => removeFromCart(item)}
            />
          ))}
          <h2>Total pris: {calculateTotal(cartItems)} NOK</h2>
          <Buttons>
            <Elements stripe={stripeKey}>
              <StyledBlueButton>Sjekk ut</StyledBlueButton>
              <StyledOrangeButton onClick={handleVippsCheckout}>
                Vipps
              </StyledOrangeButton>
            </Elements>
          </Buttons>
        </>
      )}
    </Wrapper>
  );
};

export default Cart;
