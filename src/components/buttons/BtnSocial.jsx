import { NavLink } from "react-router-dom";

const BtnSocial = ({ to, label, Icon }) => {
  return (
    <NavLink
      to={to}
      key={to}
      className="text-gray-500 p-4 border border-gray-500/20 rounded-lg hover:text-white hover:bg-gray-500/10 transition-all duration-300 bg-dark"
      target="__blank"
      title={label}
    >
      <Icon size={20} />
    </NavLink>
  );
};

export default BtnSocial;
