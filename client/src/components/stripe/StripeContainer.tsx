import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51JwS4BDJ6KD8X4jUYGm2VeyofI9YOdonXbCHy3GB12JGM3gPHdY7l3qi9cd7fAvMsTtmiZdu0sjZWy20SxAghpui007JvXEC6j";

const stripetestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripetestPromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;
