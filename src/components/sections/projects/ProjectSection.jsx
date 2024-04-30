import { RiCodeSSlashLine } from "react-icons/ri";
import { projects } from "../../../assets/json/data";
import { NavLink } from "react-router-dom";
import { ViewMoreButton } from "../../ui";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const ProjectSection = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
    hidden: { opacity: 0, translateX: -100 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const featuredProjects = projects.slice(0, 3);
  return (
    <motion.div
      className="border-b border-gray-500/20 py-10"
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={control}
    >
      <div className="lg:w-4/5 mx-auto flex flex-col">
        <h2 className="md:text-3xl text-2xl flex items-center gap-2 text-gray-500 mb-10">
          <RiCodeSSlashLine />
          Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-3 gap-3 md:mb-10">
          {featuredProjects.map((project) => (
            <div
              className="cursor-pointer group mb-10 border-b border-gray-500/20 pb-10-"
              // ref={ref}
            >
              <div className="w-full h-72 relative overflow-hidden mb-3">
                <img
                  src={project.poster}
                  alt=""
                  className="absolute w-full h-full object-cover group-hover:scale-110 transition-all duration-300 aspect-video"
                />
              </div>
              <div className="pl-2 w-full mb-4">
                <h3 className="text-xl text-gray-500 mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </h3>

                <h5 className="text-sm text-wrap opacity-50 tracking-widest font-light mb-5">
                  {project.description}
                </h5>

                <div className="flex gap-3">
                  {project.urls.map((link) => (
                    <NavLink
                      to={link.url}
                      className="text-gray-500 px-5 py-3 border border-gray-500/20 rounded-lg bg-dark hover:bg-gray-500/10 hover:text-white transition-colors duration-300"
                      target="__blank"
                    >
                      <link.icon size={20} />
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <ViewMoreButton to={"/projects"} text={"Todos los proyectos"} />
      </div>
    </motion.div>
  );
};

export default ProjectSection;
