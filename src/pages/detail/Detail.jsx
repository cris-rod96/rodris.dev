import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { projects } from "../../assets/json/data";
import { RiArrowLeftLine, RiSquareLine } from "react-icons/ri";

const Detail = () => {
  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const project = projects.find((project) => project.id === id);
    setCurrentProject(project);
  }, [id]);

  return (
    <main className="w-4/5 mx-auto py-10">
      <NavLink className="flex items-center gap-2 text-lg text-gray-500 hover:text-white transition-colors duration-300">
        <RiArrowLeftLine size={24} />
        Regresar
      </NavLink>
      {currentProject ? (
        <section className="flex flex-col mt-5">
          <h2 className="text-3xl text-white">{currentProject.name}</h2>
          <div className="flex justify-between mt-10">
            <div className="flex flex-col justify-between">
              <h3>{currentProject.description}</h3>
              {currentProject.urls.slice(0, 1).map((link) => (
                <NavLink
                  target="_blank"
                  to={link.url}
                  className="px-3 py-2 border border-gray-500/20 rounded-md w-40 flex items-center justify-center hover:text-white hover:bg-gray-500/10 transition-colors duration-300"
                >
                  Live Demo
                </NavLink>
              ))}
            </div>
            <div className="flex flex-col gap-3">
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

          {/* Poster */}
          <div className="flex flex-col mt-10">
            <div className="w-full h-[700px] relative">
              <img
                src={currentProject.poster}
                alt=""
                className="w-full h-full absolute object-cover"
              />
            </div>

            <p className="mt-5 text-justify text-gray-400">
              {currentProject.largeDescription}
            </p>
            {currentProject.urls.slice(1, 2).map((link) => (
              <NavLink
                target="_blank"
                to={link.url}
                className="py-3 border border-gray-500/20 rounded-md w-full flex items-center justify-center  transition-colors duration-300 mt-5 bg-primary text-gray-200 hover:text-white hover:bg-primary/90 gap-2"
              >
                <link.icon />
                Ver en Github
              </NavLink>
            ))}
          </div>
        </section>
      ) : (
        <h3>No hay nad</h3>
      )}
    </main>
  );
};

export default Detail;
