import React, { useState } from "react";
import BackButton from "../components/BackButton";
import * as Icons from "react-feather";
import Button from "../components/Button";
const Payment = () => {
  const [active, setactive] = useState(0);

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
        </div>
      </div>
      <div className="bottom">
        <Button>Donate ${amount}</Button>
      </div>
    </div>
  );
};

export default Payment;
