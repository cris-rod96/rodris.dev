import React from "react";
import { RiSquareLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="relative h-full py-5 w-full">
      <div className="pl-[13vw] flex items-center justify-center gap-3">
        <div className="flex items-center gap-1 text-sm">
          <h3 className="text-gray-500">Desarrollado por</h3>
          <NavLink
            to="https://github.com/cris-rod96"
            target="__blank"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            @cris-rod96
          </NavLink>
        </div>

        {/* <RiSquareLine size={10} />
        <div className="flex items-center gap-1 text-sm">
          <h3 className="text-gray-500">Plantilla</h3>
          <NavLink
            to="https://compo.framer.website/"
            target="__blank"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Compo Frammer
          </NavLink>
        </div> */}
      </div>
    </footer>
  );
};

export default FooterSection;
