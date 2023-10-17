import React from "react";

import { BsInfoCircle } from "react-icons/bs";

const Header = (props) => {
  const toggleSideMenu = () => {
    props.toggleMenu();
  };

  return (
    <>
      <div className="bg-amber-600 flex justify-between items-center px-5 py-2">
        <button className="text-white text-2xl" onClick={toggleSideMenu}>
          <BsInfoCircle />
        </button>
      </div>
    </>
  );
};

export default Header;
