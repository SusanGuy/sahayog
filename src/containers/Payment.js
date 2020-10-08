import React, { useState } from "react";
import BackButton from "../components/BackButton";
import * as Icons from "react-feather";
import Button from "../components/Button";
import KhaltiCheckout from "khalti-web";
import StripeCheckoutButton from "../components/StripeButton";

const Payment = () => {
  const [active, setactive] = useState(0);

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
      onClose() {
        console.log("widget is closing");
      },
    },
  };

  const checkout = new KhaltiCheckout(config);

  const handleKhaltiDonation = () => {
    checkout.show({
      amount,
    });
  };

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
        </div>
      </div>
      <StripeCheckoutButton price={amount} />
      <div onClick={handleKhaltiDonation} className="bottom">
        <Button>Donate ${amount}</Button>
      </div>
    </div>
  );
};

export default Payment;
