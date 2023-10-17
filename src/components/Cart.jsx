import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItemsQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <>
      {cartItemsQuantity > 0 && (
        <motion.div
          className="bg-amber-600 text-white fixed bottom-0 w-full p-5"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-between text-xl">
            <h2>Total {cartItemsQuantity} drink</h2>
            <button onClick={props.orderBoxHandler}>View Order &gt;</button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Cart;
