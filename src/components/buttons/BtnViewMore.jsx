import React from "react";
import { NavLink } from "react-router-dom";

const BtnViewAll = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className="py-3 border text-center border-gray-500/20 text-gray-500 bg-dark hover:bg-gray-500/10 hover:text-white transition-colors duration-300 mt-10"
    >
      {text}
    </NavLink>
  );
};

export default BtnViewAll;
