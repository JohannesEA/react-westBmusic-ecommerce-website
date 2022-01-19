import React, { useState, useEffect } from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";
import { publicRequest } from "../../requestMethods";
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
const KEY =
  "pk_test_51JwS4BDJ6KD8X4jUYGm2VeyofI9YOdonXbCHy3GB12JGM3gPHdY7l3qi9cd7fAvMsTtmiZdu0sjZWy20SxAghpui007JvXEC6j";

const Cart: React.FC<Props> = ({ cartItems, removeFromCart }) => {
  const [stripeToken, setStripeToken] = useState({} as Token);
  const onToken = (token: any) => {
    setStripeToken(token);
  };

  const calculateTotal = (items: Product[]) => {
    var price = 0;
    for (var i = 0; i < items.length; i++) {
      if (items[i].price !== undefined) {
        price += items[i].price;
      }
    }

    return price;
  };

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       if (cartItems.length > 0) {
  //         const res = await axios.post(
  //           "http://localhost:5000/api/checkout/payment",
  //           {
  //             tokenId: stripeToken.id,
  //             amount: calculateTotal(cartItems),
  //             currency: "usd",
  //           }
  //         );
  //         console.log(res.data);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, calculateTotal(cartItems), cartItems]);
  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       if (cartItems.length > 0) {
  //         const res = await axios.post(
  //           "http://localhost:5000/api/checkout/vipps/payment",
  //           {
  //             items: cartItems,
  //             amount: calculateTotal(cartItems),
  //           }
  //         );
  //         console.log(res.data);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, calculateTotal(cartItems), cartItems]);

  return (
    <Wrapper>
      <h1>Din Handlekurv</h1>
      {cartItems.length === 0 ? (
        <p>Ingen produkter i handlekurven</p>
      ) : (
        <>
          {" "}
          {cartItems.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              removeFromCart={() => removeFromCart(item)}
            />
          ))}
          <h2>Total pris: {calculateTotal(cartItems)} NOK</h2>
          <Buttons>
            <StripeCheckout
              stripeKey={KEY}
              name="WestBMusic"
              image="/assets/logos/logo1.png"
              billingAddress
              shippingAddress
              description={
                `Total pris er ` + calculateTotal(cartItems) + ` NOK`
              }
              amount={calculateTotal(cartItems) * 100}
              token={onToken}
            >
              {" "}
              <StyledBlueButton>Sjekk ut</StyledBlueButton>
            </StripeCheckout>
            <StyledOrangeButton
              onClick={() =>
                alert("Denne betalingsmåten er ikke implementert enda..")
              }
            >
              Vipps
            </StyledOrangeButton>
          </Buttons>
        </>
      )}
    </Wrapper>
  );
};

export default Cart;
