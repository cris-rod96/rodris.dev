import React, { useEffect } from "react";
import { RiGlasses2Line } from "react-icons/ri";
import { skills } from "../../../assets/json/data";
import { ViewMoreButton } from "../../ui";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillSection = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const exampleVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section className="border-b border-gray-500/20 py-10">
      <motion.div
        className="lg:w-4/5 mx-auto flex flex-col"
        variants={exampleVariants}
        initial="hidden"
        animate={control}
        ref={ref}
      >
        <h2 className="md:text-3xl text-2xl flex items-center gap-2 text-gray-500 mb-10">
          <RiGlasses2Line />
          Habilidades destacadas
        </h2>
        <div className="md:flex md:justify-between gap-3 mb-10 grid grid-cols-2">
          {skills.map((skill) => (
            <div className="border border-gray-500/20 flex flex-col gap-3 items-center py-5 px-2 w-full rounded-lg text-gray-500 bg-dark hover:bg-gray-500/10 cursor-pointer hover:text-white transition-colors duration-300">
              <skill.icon size={40} />
              <h3 className="text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
        <ViewMoreButton to={"/skills"} text="Todas las habilidades" />
      </motion.div>
    </section>
  );
};

export default SkillSection;
