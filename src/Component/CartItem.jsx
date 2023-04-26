import React, { useContext, useState } from "react";
import { contextCreate } from "../../Context/context";

const CartItem = (props) => {
  const [count, setCount] = useState(1);
  const { id, name, price, pic } = props;
  const { deleteItem, increase, decrease } = useContext(contextCreate);

  const inc = () => {
    setCount(count + 1);
    increase(price);
  };

  const dec = () => {
    
    if (count > 1) {
      setCount(count - 1);
      decrease(price);
    }
  };

  return (
    <>
      <div className="cartItem_details">
        <div className="leftSide">
          <img src={pic} alt="pic" />
        </div>
        <div className="rightSide">
          <p>{name}</p>
          <p>₹{price}</p>
          <div className="buttons">
            <button className="btn" style={{ background: "red" }} onClick={dec}>
              -
            </button>
            <span>{count}</span>
            <button
              className="btn"
              style={{ background: "orange" }}
              onClick={inc}
            >
              +
            </button>
            <button className="btn remove" onClick={() => deleteItem(id)}>
              remove
            </button>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </>
  );
};

export default CartItem;
