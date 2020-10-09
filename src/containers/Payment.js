import React, { useState } from "react";
import BackButton from "../components/BackButton";
import * as Icons from "react-feather";
import Button from "../components/Button";
import KhaltiCheckout from "khalti-web";
import Modal from "../components/PaymentConfirmModal";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51HZrz3GnrUKx9RrHsMiAgCquBTfdYCfLzyJgysrgZLFPheK6knupQxD8uiq4xLWvj8CCBZaG9psqc1S7johSfqNt00Xkrdpznu"
);
const Payment = ({ history }) => {
  const [active, setactive] = useState(0);
  const [modal, setModal] = useState(false);

  const handleStripe = async (_) => {
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
    console.log(result);

    if (result.error) {
      console.log(result.error);
    }
  };
  const amount = 1000;

  const config = {
    publicKey: "test_public_key_5535b5e015834104bdd1b24d62e2ec02",
    productIdentity: "Test Product",
    productName: "Dragon",
    productUrl: "https://susansubedi.com",
    eventHandler: {
      onSuccess(payload) {
        console.log(payload);
      },
      onError(error) {
        console.log(error);
      },
    },
  };

  const checkout = new KhaltiCheckout(config);

  const handleDonation = () => {
    switch (active) {
      case 0:
        checkout.show({
          amount,
        });
        break;
      case 1:
        break;
      case 2:
        handleStripe();
        break;
    }
  };

  return (
    <div className="Payment">
      <BackButton history={history} color="rgb(34, 27, 27)" />
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

      {/* {modal && <Modal setModal={setModal} />} */}
      {/* <div onClick={() => setModal(true)} className="bottom"> */}
      <div onClick={() => handleDonation()} className="bottom">
        <Button>Donate ${amount}</Button>
      </div>
    </div>
  );
};

export default Payment;
