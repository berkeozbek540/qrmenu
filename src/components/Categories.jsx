import React from "react";

import hotCoffe from "../assets/hot-coffe.jpg";
import icedCoffe from "../assets/iced-coffe.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="grid grid-cols-2 px-5 gap-8 text-center">
      <Link to="/hot" className="relative">
        <img src={hotCoffe} className="rounded-xl" />
        <p className="text-white bg-black bg-opacity-50 w-full absolute text-xl top-1/3 ">
          Hot Drinks
        </p>
      </Link>
      <Link to="/iced" className="relative">
        <img src={icedCoffe} className="rounded-xl" />
        <p className="text-white bg-black bg-opacity-50 w-full absolute text-xl top-1/3 ">
          Iced Drinks
        </p>
      </Link>
    </div>
  );
};

export default Categories;
