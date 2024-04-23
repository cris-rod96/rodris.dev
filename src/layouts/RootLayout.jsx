import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/sidebar/Sidebar";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";

const RootLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <Sidebar showMenu={showMenu} toggleMenu={toggleMenu} />
      <button onClick={toggleMenu} className="lg:hidden fixed top-5 left-5">
        <RiMenuFill size={30} />
      </button>
      <main className="lg:pl-[14vw] lg:py-10 px-5 py-20 ">
        <section className="lg:mx-20">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default RootLayout;
