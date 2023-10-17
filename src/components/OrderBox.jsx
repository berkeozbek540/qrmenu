import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { cartActions } from "./store/cart-slice";

const OrderBox = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const closeOrderBoxHandler = () => {
    props.closeOrderBox();
  };

  const orderHandler = () => {
    dispatch(cartActions.orderHandler());
  };
  return (
    <motion.div
      className="bg-white fixed z-10 bottom-0 w-full border-t-2"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="pt-2 px-5 w-full text-right">
        <button
          onClick={closeOrderBoxHandler}
          className="rounded-full border border-black px-2 py-0.5"
        >
          X
        </button>
      </div>
      <div className="grid grid-cols-2 text-xl px-5 py-5 ">
        {cartItems.map((item) => (
          <OrderItem
            key={item.id}
            id={item.id}
            title={item.title}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="text-center py-3">
        <button
          onClick={orderHandler}
          className="bg-amber-500 text-white text-xl px-5 py-2 rounded"
        >
          Order
        </button>
      </div>
    </motion.div>
  );
};

export default OrderBox;
