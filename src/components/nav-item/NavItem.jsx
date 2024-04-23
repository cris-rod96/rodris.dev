import { NavLink } from "react-router-dom";

const NavItem = ({ to, label, icon: Icon }) => {
  return (
    <NavLink
      to={to}
      className="px-8 py-5 flex items-center gap-2 border-b border-gray-500/20 text-gray-500 hover:text-white hover:bg-gray-500/10 transition-all duration-300"
    >
      <Icon size={20} />
      {label}
    </NavLink>
  );
};

export default NavItem;
