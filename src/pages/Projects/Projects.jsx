import { NavLink, useNavigate } from "react-router-dom";
import { PROJECTS_DATA } from "../../data";
import { RiArrowLeftLine } from "react-icons/ri";
import Container from "../../components/container/Container";

const Projects = () => {
  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/project/${id}`);
  };
  return (
    <Container id="projects">
      <main className="mt-10 lg:mt-0">
        <NavLink to={"/"} className="flex items-center gap-2 text-lg">
          <RiArrowLeftLine size={24} />
          Regresar
        </NavLink>
        <section className="grid lg:grid-cols-2 gap-10 mt-10">
          {PROJECTS_DATA.map((project) => (
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
                <h6 className="text-xs uppercase text-gray-500/60 tracking-widest lg:mt-2 mt-5">
                  {project.category}
                </h6>
                <h3 className="text-xl text-gray-300 mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </h3>
                <h2 className="text-wrap text-lg font-light mb-5 text-gray-500">
                  {project.description}
                </h2>
              </div>
            </article>
          ))}
        </section>
      </main>
    </Container>
  );
};

export default Projects;
