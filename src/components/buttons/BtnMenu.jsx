import { RiMenuFill } from "react-icons/ri";

const BtnMenu = ({ toggleMenu }) => {
  return (
    <button
      className="absolute top-5 left-5 lg:hidden"
      type="button"
      onClick={toggleMenu}
    >
      <RiMenuFill size={30} />
    </button>
  );
};

export default BtnMenu;
