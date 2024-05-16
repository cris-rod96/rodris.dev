import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({ to, label, Icon, toggleMenu }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `px-8 py-5 flex items-center gap-2 border-b border-gray-500/20  text-white bg-gray-500/10 transition-all duration-300`
          : `px-8 py-5 text-gray-500 flex items-center gap-2 border-b border-gray-500/20  hover:text-white hover:bg-gray-500/10 transition-all duration-300`
      }
      onClick={toggleMenu}
    >
      <Icon size={20} />
      {label}
    </NavLink>
  );
};

export default Item;
