import { NavLink } from "react-router-dom";
import { projects } from "../../assets/json/data";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiCodeSSlashLine,
} from "react-icons/ri";

const Project = () => {
  return (
    <div className="py-10 flex flex-col gap-10">
      <div className="lg:w-4/5 mx-auto  mb-10">
        <NavLink
          to={"/"}
          className="flex items-center gap-1 text-gray-500 hover:text-white transition-colors duration-300"
        >
          <RiArrowLeftLine size={20} />
          Regresar
        </NavLink>
      </div>
      {projects.map((project, idx) => (
        <div
          className={`border-dashed border-b-2 border-gray-500/20 pb-10 group cursor-pointer`}
        >
          <div
            className={`lg:w-4/5 mx-auto flex gap-3 ${
              idx % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-full h-96 relative overflow-hidden">
              <img
                src={project.poster}
                alt=""
                className="w-full h-full object-cover absolute group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="w-full flex items-center relative transition-all duration-300">
              <div
                className={`px-5 py-5 border border-gray-500/20 rounded-lg absolute  z-50 bg-dark flex flex-col space-y-5 items-center justify-center ${
                  idx % 2 !== 0 ? "-right-20" : "-left-20 "
                } overflow-hidden group-hover:shadow-md group-hover:shadow-gray-500/20`}
              >
                <h3 className="text-2xl text-gray-300 group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </h3>
                <h5 className="text-gray-500">{project.description}</h5>
                <div className="flex justify-center flex-wrap gap-3 mt-2">
                  {project.technologies.map((tech) => (
                    <div className="flex flex-col items-center gap-2 px-3 py-2 border border-gray-500/20 rounded-md bg-dark">
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.urls.length > 0 ? (
                    project.urls.map((link) => (
                      <NavLink
                        to={link.url}
                        className="text-gray-500 px-5 py-3 border border-gray-500/20 rounded-lg bg-dark hover:bg-gray-500/10 hover:text-white transition-colors duration-300 "
                        target={link.target}
                      >
                        <link.icon size={20} />
                      </NavLink>
                    ))
                  ) : (
                    <div className="absolute bottom-0 w-full bg-primary left-0 py-2 flex justify-center text-white font-bold">
                      <h3>Próximamente</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
