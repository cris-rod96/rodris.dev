import { RiArrowLeftLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const BtnBack = () => {
  return (
    <NavLink
      to={"/"}
      className="flex items-center gap-2 lg:text-lg text-xl mb-5"
    >
      <RiArrowLeftLine size={24} />
      Regresar
    </NavLink>
  );
};

export default BtnBack;
