import React from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "./store/cart-slice";

const DrinkItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, image, ingredients } = props;

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title }));
  };

  return (
    <div key={id}>
      <div className="image-container">
        <img src={image} className="rounded-t-xl image" />
      </div>
      <div className="text-container flex flex-col justify-around border p-1 text-center">
        <h2 className="text-l font-bold">{title}</h2>
        <h2 className="text-slate-700 text-md">{ingredients.join(" , ")}</h2>
        <button
          onClick={addToCartHandler}
          className="bg-green-700 text-white px-2 py-1"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default DrinkItem;
