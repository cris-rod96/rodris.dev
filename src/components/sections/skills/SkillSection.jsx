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
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] border border-gray-500/20 py-5">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:max-w-none  animate-infinite-scroll">
            {skills.map((skill, idx) => (
              <li
                key={`skil-${idx}`}
                className="px-5 py-3 flex flex-col gap-2 justify-center items-center"
              >
                <skill.icon size={40} />
                {skill.name}
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none  animate-infinite-scroll"
            aria-hidden="true"
          >
            {skills.map((skill, idx) => (
              <li
                key={`skil-${idx}`}
                className="px-5 py-3 flex flex-col gap-2 justify-center items-center"
              >
                <skill.icon size={40} />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <ViewMoreButton to={"/skills"} text="Ver todas" />
      </motion.div>
    </section>
  );
};

export default SkillSection;
