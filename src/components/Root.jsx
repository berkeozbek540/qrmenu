import { useState } from "react";

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Side from "./Side";
import Cart from "./Cart";
import OrderBox from "./OrderBox";
import { useSelector } from "react-redux";

export const Root = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isOrderBoxOpen, setIsOrderBoxOpen] = useState(false);

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const sideMenuHandler = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  const orderBoxToggle = () => {
    setIsOrderBoxOpen(!isOrderBoxOpen);
  };
  return (
    <>
      {isSideMenuOpen && <Side closeSideMenu={sideMenuHandler} />}
      {isOrderBoxOpen && cartQuantity > 0 && (
        <OrderBox closeOrderBox={orderBoxToggle} />
      )}
      {cartQuantity > 0 && <Cart orderBoxHandler={orderBoxToggle} />}

      <div
        className={`${
          isSideMenuOpen && isOrderBoxOpen && "fixed inset-0 opacity-70"
        }`}
      >
        <Header toggleMenu={sideMenuHandler} />
        <Hero />
        <Outlet />
      </div>
    </>
  );
};

export default Root;
