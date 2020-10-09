import React, { useRef, useEffect, useCallback } from "react";
import "./PaymentConfirmModal.scss";
import * as Icons from "react-feather";

const PaymentConfirmModal = ({ setModal }) => {
  const node = useRef();
  const handleClick = useCallback(
    (e) => {
      if (node.current.contains(e.target)) {
        return;
      }
      setModal(false);
    },
    [setModal]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);
  return (
    <div className="confirm-modal">
      <div ref={node} className="main-modal">
        <span onClick={() => setModal(false)} className="modal-close">
          X
        </span>
        <div className="tickmark-modal">
          <Icons.Check color="white" strokeWidth="0.8rem" />
        </div>
        <div className="wrapping-div">
          <span className="first-header">
            You donated <span className="donation-amount">Rs.500</span> to
            Sushant Baskota
          </span>
          <h1>Thank you for your donation</h1>
          <input placeholder="Add a comment" className="comment-input" />
          <button className="add-comment">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmModal;
