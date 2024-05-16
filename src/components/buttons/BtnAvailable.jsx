import React from "react";
import { GoDotFill } from "react-icons/go";
import { NavLink } from "react-router-dom";

const BtnAvailable = ({ text, to }) => {
  return (
    <NavLink
      to={to}
      className="flex items-center md:justify-start justify-center gap-1 px-5 py-2 border border-primary text-primary bg-primary/10 rounded-md hover:bg-primary/20 hover:text-white duration-300 transition-colors md:mb-0 mb-10"
    >
      <GoDotFill />
      {text}
    </NavLink>
  );
};

export default BtnAvailable;
