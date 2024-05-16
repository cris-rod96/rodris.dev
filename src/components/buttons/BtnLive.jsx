import { NavLink } from "react-router-dom";

const BtnLive = ({ to, text }) => {
  return (
    <NavLink
      key={to}
      to={to}
      target="_blank"
      className="px-3 py-2 border border-gray-500/20 rounded-md flex items-center justify-center hover:text-white hover:bg-gray-500/10 transition-colors duration-300 lg:w-40 w-full"
    >
      {text}
    </NavLink>
  );
};

export default BtnLive;
