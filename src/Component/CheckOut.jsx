import React, { useContext } from "react";
import { contextCreate } from "../../Context/context";

const CheckOut = (props) => {
  const { cartData } = props;

  const { items, amount } = useContext(contextCreate);

  const totalAmount = cartData
    .map((val) => val.price)
    .reduce((a, b) => {
      return a + b;
    }, 0);

  return (
    <>
      <div className="checkOut_details">
        <h1>
          <u> PRICE DETAILS</u>
        </h1>
        <div className="amount">
          <div className="amount_text">
            <p>ITEM:</p>
            <p>{cartData.length + items}</p>
          </div>
          <div className="amount_text">
            <p>TOTAL AMOUNT:</p>
            <p>₹{totalAmount + amount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
