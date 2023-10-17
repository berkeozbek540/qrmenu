import React from "react";

import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import Categories from "./Categories";

const Main = () => {
  return (
    <>
      <div className="bg-white text-slate-800 text-center py-3 ">
        <span className="text-2xl">Borcelle Coffe Shop</span>
        <div className="text-white text-xl flex justify-center gap-2 mt-2">
          <span className="bg-green-600 p-2 col-span-1 rounded-full">
            <FaWhatsapp />
          </span>
          <span className="bg-blue-800 p-2 col-span-1 rounded-full">
            <FaFacebookF />
          </span>
          <span className="bg-gradient-to-r from-amber-400 via-pink-600 to-purple-800 p-2 col-span-1 rounded-full">
            <FaInstagram />
          </span>
          <span className="bg-red-800 p-2 col-span-1 rounded-full">
            <FaYoutube />
          </span>
        </div>
      </div>
      <Categories />
    </>
  );
};

export default Main;
