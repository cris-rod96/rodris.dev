import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RiGlasses2Line } from "react-icons/ri";
import Container from "../container/Container";
import { useEffect } from "react";
import { SKILLS_DATA } from "../../data";

const SkillsSection = () => {
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
    <Container>
      <motion.div
        className="flex flex-col"
        variants={exampleVariants}
        initial="hidden"
        animate={control}
        ref={ref}
      >
        <h2 className="md:text-3xl text-2xl flex items-center gap-2 text-gray-500 mb-10">
          <RiGlasses2Line />
          Habilidades destacadas
        </h2>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]  py-5">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:max-w-none  animate-infinite-scroll">
            {SKILLS_DATA.map((skill, idx) => (
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
            {SKILLS_DATA.map((skill, idx) => (
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
        {/* <ViewMoreButton to={"/skills"} text="Ver todas" /> */}
      </motion.div>
    </Container>
  );
};

export default SkillsSection;
