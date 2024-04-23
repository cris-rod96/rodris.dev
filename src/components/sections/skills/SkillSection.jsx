import React from "react";
import { RiGlasses2Line } from "react-icons/ri";
import { skills } from "../../../assets/json/data";
import { ViewMoreButton } from "../../ui";

const SkillSection = () => {
  return (
    <section className="border-b border-gray-500/20 py-10">
      <div className="lg:w-4/5 mx-auto flex flex-col">
        <h2 className="text-3xl flex items-center gap-2 text-gray-500 mb-10">
          <RiGlasses2Line />
          Habilidades destacadas
        </h2>
        <div className="flex justify-between gap-3 mb-10">
          {skills.map((skill) => (
            <div className="border border-gray-500/20 flex flex-col gap-3 items-center py-5 px-2 w-full rounded-lg text-gray-500 bg-dark hover:bg-gray-500/10 cursor-pointer hover:text-white transition-colors duration-300">
              <skill.icon size={40} />
              <h3 className="text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
        <ViewMoreButton to={"/skills"} text="Todas las habilidades" />
      </div>
    </section>
  );
};

export default SkillSection;
