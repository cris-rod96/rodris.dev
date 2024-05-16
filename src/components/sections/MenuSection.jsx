import { NavLink } from "react-router-dom";
import { MENU_DATA } from "../../data";
import Item from "../item/Item";

const MenuSection = ({ toggleMenu }) => {
  return (
    <section>
      <ul>
        {MENU_DATA.map((item) => (
          <Item
            to={item.path}
            Icon={item.icon}
            label={item.label}
            key={item.path}
            toggleMenu={toggleMenu}
          />
        ))}
      </ul>
    </section>
  );
};

export default MenuSection;
