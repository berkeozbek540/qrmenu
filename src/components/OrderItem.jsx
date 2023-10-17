import React from "react";

import { cartActions } from "./store/cart-slice";
import { useDispatch } from "react-redux";

const OrderItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, quantity } = props;

  const increaseItemHandler = () => {
    dispatch(cartActions.addItemToCart({ id }));
  };

  const decreaseItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div className="flex justify-between col-span-2 py-5 border-b-2 last:border-b-0">
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <button
          onClick={decreaseItemHandler}
          className="text-amber-600 border border-r-0 px-2 py-1.5"
        >
          -
        </button>
        <span className="border px-2 py-1.5">{quantity}</span>
        <button
          onClick={increaseItemHandler}
          className="text-amber-600 border border-l-0 px-2 py-1.5"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
