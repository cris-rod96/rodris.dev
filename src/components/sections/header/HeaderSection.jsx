import React, { useEffect } from "react";
import { social } from "../../../assets/json/data";
import { GoDotFill } from "react-icons/go";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <section className="border-b border-gray-500/20 py-20">
      <div className="lg:w-4/5 mx-auto">
        <div className="flex items-start justify-between mb-10 md:flex-row flex-col-reverse">
          <div className="relative w-40 h-40 md:rounded-lg border-2 border-gray-500/30 mx-auto md:m-0 rounded-full">
            <img
              src="/me.jpg"
              alt="Profile Image"
              className="absolute w-full h-full object-cover md:rounded-lg rounded-full "
            />
          </div>

          <NavLink
            to="/contact"
            className="flex items-center gap-2 px-3 py-2 border border-green-800 text-green-800 bg-green-800/10 hover:text-green-600 transition-all duration-300 md:w-auto md:justify-start md:mb-0 w-full justify-center mb-5 "
          >
            <GoDotFill />
            Open to work
          </NavLink>
        </div>

        <div className="md:max-w-3xl mb-14">
          <h3 className="md:text-4xl text-2xl text-wrap mb-5 [&>span]:text-primary [&>span]:font-light">
            Hola, me llamo <span>Cristhian</span>. Soy un{" "}
            <span>Backend Developer</span> && <span>Frontend</span> Explorer.
          </h3>
          <h5 className="text-gray-500 lg:text-lg text-wrap">
            Soy un Desarrollador Web especializado en el Backend, sin temor a
            enfrentarme al Frontend. Mi enfoque se centra en la creación de
            soluciones innovadoras y eficientes. En constante aprendizaje,
            ahupando las nuevas tendencias.
          </h5>
        </div>

        <div className="flex items-center gap-2">
          {social.map((item) => (
            <NavLink
              to={item.link}
              key={item.link}
              className="text-gray-500 px-5 py-3 border border-gray-500/20 rounded-lg hover:text-white hover:bg-gray-500/10 transition-all duration-300 bg-dark"
              target="__blank"
              title={item.label}
            >
              <item.icon size={17} />
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
