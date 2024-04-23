import { RiCodeSSlashLine } from "react-icons/ri";
import { projects } from "../../../assets/json/data";
import { NavLink } from "react-router-dom";
import { ViewMoreButton } from "../../ui";

const ProjectSection = () => {
  const featuredProjects = projects.slice(0, 3);
  return (
    <section className="border-b border-gray-500/20 py-10">
      <div className="lg:w-4/5 mx-auto flex flex-col">
        <h2 className="text-3xl flex items-center gap-2 text-gray-500 mb-10">
          <RiCodeSSlashLine />
          Projectos Destacados
        </h2>
        <div className="grid grid-cols-3 gap-3 mb-10">
          {featuredProjects.map((project) => (
            <div className="cursor-pointer group">
              <div className="w-full h-72 relative overflow-hidden mb-3">
                <img
                  src={project.poster}
                  alt=""
                  className="absolute w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
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
    </section>
  );
};

export default ProjectSection;
