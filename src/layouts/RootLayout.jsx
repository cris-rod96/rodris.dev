import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <>
      <Sidebar showMenu={showMenu} toggleMenu={toggleMenu} />
      <button
        className="absolute top-5 left-5 lg:hidden"
        type="button"
        onClick={toggleMenu}
      >
        <RiMenuFill size={30} />
      </button>
      <main className="lg:pl-[13vw] pb-10 ">
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default RootLayout;
