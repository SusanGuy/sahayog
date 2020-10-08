import React, { useState } from "react";
import BackButton from "../components/BackButton";
import * as Icons from "react-feather";
import Button from "../components/Button";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51HZrz3GnrUKx9RrHsMiAgCquBTfdYCfLzyJgysrgZLFPheK6knupQxD8uiq4xLWvj8CCBZaG9psqc1S7johSfqNt00Xkrdpznu"
);

const Payment = () => {
  const [active, setactive] = useState(0);

  const handleClick = async (_) => {
    if (active === 2) {
      // Get Stripe.js instance
      const stripe = await stripePromise;
      // Call your backend to create the Checkout Session
      const response = await fetch(
        `http://localhost:8000/payment/stripe-session`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }, // this line is important, if this content-type is not set it wont work

          body: JSON.stringify({
            amount,
            success_url: "http://localhost:3000/my-donations",
            cancel_url: "http://localhost:3000/payment",
          }),
        }
      );

      const session = await response.json();

      // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error);
      }
    }
  };
  const amount = 1000;
  return (
    <div className="Payment">
      <BackButton color="rgb(34, 27, 27)" />
      <div className="amount">
        <span>Amount</span>
        <div className="amount-right">
          <span className="money">${amount}</span>
          <Icons.ChevronDown size="1.2rem" />
        </div>
      </div>
      <div className="payment-methods">
        <span className="title">Pay With</span>
        <div className="methods">
          <div
            onClick={() => {
              if (active === 0) {
                setactive(null);
              } else {
                setactive(0);
              }
            }}
            className={`method ${active === 0 ? "active" : ""}`}
          >
            <span>Khalti</span>
            {active === 0 ? <Icons.Check color="green" /> : ""}
          </div>

          <div
            onClick={() => {
              if (active === 1) {
                setactive(null);
              } else {
                setactive(1);
              }
            }}
            className={`method ${active === 1 ? "active" : ""}`}
          >
            <span>eSewa</span>
            {active === 1 ? <Icons.Check color="green" /> : ""}
          </div>
          <div
            onClick={() => {
              if (active === 2) {
                setactive(null);
              } else {
                setactive(2);
              }
            }}
            className={`method ${active === 2 ? "active" : ""}`}
          >
            <span>Credit/Debit Card</span>
            {active === 2 ? <Icons.Check color="green" /> : ""}
          </div>
        </div>
      </div>

      <div className="bottom" onClick={() => handleClick()}>
        <Button>Donate ${amount}</Button>
      </div>
    </div>
  );
};

export default Payment;
