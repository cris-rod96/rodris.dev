import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { RiArrowLeftLine, RiSquareLine } from "react-icons/ri";
import { PROJECTS_DATA } from "../../data";
import Container from "../../components/container/Container";
import { LuGithub } from "react-icons/lu";
import { motion } from "framer-motion";
const Detail = () => {
  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const project = PROJECTS_DATA.find((project) => project.id === id);
    setCurrentProject(project);
  }, [id]);

  return (
    <Container>
      <main className="lg:mt-0 mt-10">
        <NavLink className="flex items-center gap-2 text-lg text-gray-500 hover:text-white transition-colors duration-300">
          <RiArrowLeftLine size={24} />
          Regresar
        </NavLink>
        {currentProject ? (
          <section className="flex flex-col my-5">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl text-white">{currentProject.name}</h2>
              <div className="flex lg:flex-row flex-col-reverse gap-3 justify-between lg:mt-10 mt-5 mb-5 lg:mb-0">
                <div className="flex flex-col justify-between lg:my-0">
                  <h3 className="mb-2">{currentProject.description}</h3>
                  {currentProject.urls.some((url) => url.label === "Deploy") ? (
                    <NavLink
                      key={
                        currentProject.urls.find(
                          (url) => url.label === "Deploy"
                        ).url
                      }
                      to={
                        currentProject.urls.find(
                          (url) => url.label === "Deploy"
                        ).url
                      }
                      target="_blank"
                      className="px-3 py-2 border border-gray-500/20 rounded-md flex items-center justify-center hover:text-white hover:bg-gray-500/10 transition-colors duration-300 lg:w-40 w-full"
                    >
                      Live Demo
                    </NavLink>
                  ) : (
                    <div className="px-3 py-2 border border-primary rounded-md flex items-center justify-center text-primary bg-primary/15  transition-colors duration-300 lg:w-40 w-full">
                      Próximamente...
                    </div>
                  )}
                </div>
                <div className="flex lg:flex-col flex-row flex-wrap justify-center gap-3 lg:w-64 ">
                  <h3 className="flex items-center gap-2">
                    <RiSquareLine size={12} className="text-primary" />
                    {currentProject.category}
                  </h3>
                  <h3 className="flex items-center gap-2">
                    <RiSquareLine size={12} className="text-primary" />
                    {currentProject.duration}
                  </h3>
                  <h3 className="flex items-center gap-2">
                    <RiSquareLine size={12} className="text-primary" />
                    {currentProject.roles.map((rol) => rol).join(",")}
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Poster */}
            <div className="flex flex-col lg:mt-10">
              <motion.div
                className="w-full lg:h-[700px] md:h-[500px] h-[200px] relative"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img
                  src={currentProject.poster}
                  alt=""
                  className="w-full h-full absolute object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <p
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="mt-5 text-justify text-gray-400"
                >
                  {currentProject.largeDescription}
                </p>
                {currentProject.urls.some((url) => url.label === "Code") ? (
                  <NavLink
                    target="_blank"
                    key={
                      currentProject.urls.find((url) => url.label === "Code")
                        .url
                    }
                    to={
                      currentProject.urls.find((url) => url.label === "Code")
                        .url
                    }
                    className="py-3 border border-gray-500/20 rounded-md w-full flex items-center justify-center  transition-colors duration-300 mt-5 bg-primary text-gray-200 hover:text-white hover:bg-primary/90 gap-2"
                  >
                    <LuGithub />
                    Ver en Github
                  </NavLink>
                ) : (
                  <div className="px-3 py-2 border border-primary rounded-md flex items-center justify-center text-primary bg-primary/15  transition-colors duration-300 lg:w-40 w-full">
                    Próximamente...
                  </div>
                )}
              </motion.div>
            </div>
          </section>
        ) : (
          <h3>No hay nad</h3>
        )}
      </main>
    </Container>
  );
};

export default Detail;
