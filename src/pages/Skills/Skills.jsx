import { NavLink } from "react-router-dom";
import Container from "../../components/container/Container";
import { RiArrowLeftLine } from "react-icons/ri";
import { SKILLS_DATA } from "../../data";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <Container id="skills">
      <main className="mt-10 lg:mt-0">
        <NavLink to={"/"} className="flex items-center gap-2 text-lg">
          <RiArrowLeftLine size={24} />
          Regresar
        </NavLink>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-10 mt-10">
          {SKILLS_DATA.map((skill, index) => (
            <motion.div
              className="border border-gray-500/20 rounded-lg flex flex-col gap-2 justify-center items-center py-10 cursor-pointer text-gray-500 hover:text-white bg-dark hover:bg-gray-500/10 transition-colors duration-300 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: index * 0.1, duration: 0.2 }}
              id={index}
            >
              <skill.icon
                size={40}
                className={`${skill.color ? skill.color : "#fff"}`}
              />
              <h3 className="text-lg">{skill.name}</h3>
              {skill.future && (
                <span className="absolute bottom-0 left-0 text-sm  w-full text-center py-2  ">
                  Proximamente
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </Container>
  );
};

export default Skills;
