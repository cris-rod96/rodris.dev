import { menu } from "../../../assets/json/data";
import NavItem from "../../nav-item/NavItem";

const Sidebar = ({ showMenu, toggleMenu }) => {
  return (
    <>
      <aside
        className={`fixed lg:w-[250px] md:w-[300px] w-[250px] h-full bg-dark border-r border-gray-500/20 transition-all duration-300 lg:left-0 ${
          showMenu ? "left-0" : "-left-full"
        } z-50`}
      >
        <section className="p-8 border-b border-gray-500/20 group">
          <h3 className="text-lg">Cristhian Rodríguez</h3>
          <h5 className="text-sm tracking-widest text-gray-500 group-hover:text-primary transition-all duration-300">
            Backend Developer
          </h5>
        </section>
        <section>
          {/* Menu */}
          <nav>
            {menu.map((item) => (
              <NavItem
                to={item.path}
                key={item.path}
                label={item.label}
                icon={item.icon}
                active={item.active}
              />
            ))}
          </nav>
        </section>
      </aside>
      <div
        className={`fixed w-full h-full bg-dark opacity-50 ${
          showMenu ? "block" : "hidden"
        } transition-all duration-300 z-45`}
        onClick={toggleMenu}
      />
    </>
  );
};

export default Sidebar;
