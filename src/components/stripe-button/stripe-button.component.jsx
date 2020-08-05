import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HCmseASHyi709Zf8eEDoEoEYiCDsQahCKKNGWAM1Z47Tepq83PoepGm9WbRZLCcKyia3CXORhkW1Kh2bYb7Yuun00pPLRiOFF";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Sucessful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
