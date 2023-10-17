import React from "react";

import bg from "../assets/bg.jpg";
import logo from "../assets/logo.png";

const Main = () => {
  return (
    <div className="bg-cover mb-5" style={{ backgroundImage: `url(${bg})` }}>
      <div className="py-5 flex justify-center">
        <img className="bg-white rounded-full p-2" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Main;
