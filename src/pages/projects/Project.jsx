import React from "react";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiSquareLine,
} from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { projects } from "../../assets/json/data";

const Project = () => {
  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/project/${id}`);
  };
  return (
    <main className="w-4/5 mx-auto py-10">
      <NavLink to={"/"} className="flex items-center gap-2 text-lg">
        <RiArrowLeftLine size={24} />
        Regresar
      </NavLink>
      <section className="grid grid-cols-2 gap-3 mt-10">
        {projects.map((project) => (
          <article
            className="border border-gray-500/20 overflow-hidden rounded-xl group cursor-pointer"
            onClick={() => goToDetail(project.id)}
          >
            <header className="relative h-80 w-full overflow-hidden">
              <img
                src={project.poster}
                alt=""
                className="w-full h-full absolute object-cover group-hover:scale-110 transition-all duration-300"
              />
            </header>
            <div className="px-3 py-4 space-y-2">
              <h5 className="text-gray-400 opacity-55 uppercase font-semibold tracking-wide text-xs">
                {project.category}
              </h5>
              <h2 className="text-lg group-hover:text-primary transition-colors duration-300">
                {project.name}
              </h2>
              <h3 className="text-sm text-justify text-gray-500">
                {project.description}
              </h3>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Project;
