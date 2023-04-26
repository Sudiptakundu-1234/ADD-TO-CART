import React, { useContext, useEffect, useState } from "react";
import { contextCreate } from "../../Context/context";
import { data } from "../dummyData/dummyData";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";

const Cart = () => {
  const { cartData } = useContext(contextCreate);

  console.log(cartData);

  return (
    <>
      {cartData == 0 ? (
        <>
          <h1 style={{ textAlign: "center", marginTop: "200px" }}>
            <u>pls add something in the cart</u>
          </h1>
        </>
      ) : (
        <div className="cartContainer">
          <div className="cartItem">
            <h1>Shopping Cart</h1>
            <hr />
            {cartData.map((item, index) => {
              const { id, name, price, pic } = item;
              return (
                <div key={index}>
                  <CartItem id={id} name={name} price={price} pic={pic} />;
                </div>
              );
            })}
          </div>
          <div className="checkout">
            <CheckOut cartData={cartData} />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
