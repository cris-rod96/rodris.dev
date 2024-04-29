import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/sidebar/Sidebar";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";
import FooterSection from "../components/sections/footer/FooterSection";

const RootLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <Sidebar showMenu={showMenu} toggleMenu={toggleMenu} />
      <button onClick={toggleMenu} className="lg:hidden absolute top-5 left-5">
        <RiMenuFill size={30} />
      </button>
      <main className="md:pl-[13vw] overflow-x-hidden px-5">
        <Outlet />
      </main>

      <FooterSection />
    </>
  );
};

export default RootLayout;
