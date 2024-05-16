import { NavLink } from "react-router-dom";

const Card = ({ project }) => {
  return (
    <article
      className="cursor-pointer group flex flex-col md:gap-3 border border-gray-500/20 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-gray-500/20 transition-shadow duration-300 relative h-[550px] lg:mb-0 mb-5"
      key={project.id}
      // ref={ref}
    >
      <header className="w-full h-72 relative overflow-hidden">
        <img
          src={project.poster}
          alt=""
          className="absolute w-full h-full object-cover group-hover:scale-110 transition-all duration-300 aspect-video"
        />
      </header>
      <section className="px-3 w-full space-y-2">
        <h6 className="text-xs uppercase text-gray-500/60 tracking-widest lg:mt-2 mt-5">
          {project.category}
        </h6>
        <h3 className="text-xl text-gray-300 mb-3 group-hover:text-primary transition-colors duration-300">
          {project.name}
        </h3>

        <h2 className="text-wrap text-lg font-light mb-5 text-gray-500">
          {project.description}
        </h2>

        <div className="flex gap-2 absolute bottom-4">
          {project.urls.map((link) => (
            <NavLink
              to={link.url}
              key={link.url}
              className="text-gray-500 p-4 border border-gray-500/20 rounded-lg hover:text-white hover:bg-gray-500/10 transition-all duration-300 bg-dark"
              target={link.target}
              title={link.label}
            >
              <link.icon size={20} />
            </NavLink>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Card;
