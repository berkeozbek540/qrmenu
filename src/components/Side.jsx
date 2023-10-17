import React from "react";

import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import "react-social-icons/twitter";

const Side = (props) => {
  const closeSideMenuHandler = () => {
    props.closeSideMenu();
  };
  return (
    <div className="bg-white absolute z-10 top-0 border-r border-slate-300 py-5 px-3 w-1/2 h-full">
      <button
        onClick={closeSideMenuHandler}
        className="float-right rounded-full border border-black px-2 py-0.5"
      >
        X
      </button>
      <div className="my-10 text-center">
        <h2 className="text-xl mb-3">About Us</h2>
        <p className="text-slate-700">
          Borcello Cafe invites you to a warm and welcoming corner in our city,
          where flavor and hospitality converge.
        </p>
        <div className="text-center grid grid-cols-3 mt-4">
          <SocialIcon network="instagram" />
          <SocialIcon network="facebook" />
          <SocialIcon network="twitter" />
        </div>
      </div>
    </div>
  );
};

export default Side;
