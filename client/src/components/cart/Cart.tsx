import React, { useState, useEffect } from "react";
// import StripeCheckout, { Token } from "react-stripe-checkout";
// import { publicRequest } from "../../requestMethods";

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

// const KEY =
//   "pk_test_51JwS4BDJ6KD8X4jUYGm2VeyofI9YOdonXbCHy3GB12JGM3gPHdY7l3qi9cd7fAvMsTtmiZdu0sjZWy20SxAghpui007JvXEC6j";

const Cart: React.FC<Props> = ({ cartItems, removeFromCart }) => {
  // const [stripeToken, setStripeToken] = useState({} as Token);

  // const onToken = (token: Token) => {
  //   setStripeToken(token);
  // };

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
  //       const res = await publicRequest.post("/api/checkout/payment", {
  //         tokenId: stripeToken.id,
  //         amount: calculateTotal(cartItems),
  //       });
  //       console.log(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, calculateTotal(cartItems), cartItems]);

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
        {/* <StripeCheckout
          name="WestBMusic"
          image="/assets/logos/logo1.png"
          billingAddress
          shippingAddress
          description={`Total pris er ` + calculateTotal(cartItems) + ` NOK`}
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        > */}{" "}
        <StyledButtonFour>Sjekk ut</StyledButtonFour>
        {/* </StripeCheckout> */}
        <StyledButtonFour>Vipps</StyledButtonFour>
      </Buttons>
    </Wrapper>
  );
};

export default Cart;
