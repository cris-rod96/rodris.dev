import React from "react";
import { RiUser6Line } from "react-icons/ri";
import { ViewMoreButton } from "../../ui";

const AboutSection = () => {
  return (
    <section className="border-b border-gray-500/20 py-10">
      <div className="lg:w-4/5 mx-auto flex flex-col">
        <h2 className="text-3xl flex items-center gap-2 text-gray-500 mb-10">
          <RiUser6Line />
          Sobre mí
        </h2>

        <div className="grid grid-cols-2 mb-10">
          <div className="space-y-5 [&>p]:text-lg text-wrap text-gray-500 font-light">
            <p>
              ¡Hola! Soy Cristhian Rodríguez, aunque mis amigos me llaman
              Rodris. Originario de Ecuador, me especialicé en Ingeniería en
              Informática y Sistemas Computacionales. Aunque no me gradué
              oficialmente, tengo una sólida formación en este campo.
            </p>
            <p>
              Mi inmersión en el mundo de la programación comenzó en el año
              2014, y desde entonces he estado comprometido con el aprendizaje y
              el crecimiento continuo. El Bootcamp de Henry fue un paso
              importante en mi camino, proporcionándome las habilidades y el
              conocimiento adicionales necesarios para convertirme en un
              desarrollador full stack.
            </p>
            <p>
              Aunque me desenvuelvo bien en el desarrollo full stack, mi
              verdadera pasión y enfoque se encuentran en el Backend. Disfruto
              creando soluciones sólidas y eficientes que respalden las
              aplicaciones y sistemas que construimos. Sin embargo, eso no
              significa que le tema al Frontend; estoy dispuesto a enfrentar
              cualquier desafío que se presente en el camino.
            </p>
            <p>
              A través de mi portafolio, te invito a explorar algunos de los
              proyectos en los que he trabajado, donde podrás ver mi enfoque en
              la creación de soluciones robustas y escalables. Estoy siempre
              abierto a nuevas oportunidades de colaboración y crecimiento, así
              que no dudes en ponerte en contacto si estás interesado en
              trabajar juntos para llevar tus ideas al siguiente nivel. ¡Espero
              que disfrutes explorando mi trabajo tanto como yo disfruté
              creándolo!
            </p>
          </div>
          <div className="flex items-start justify-center">
            <div className="w-[500px] h-[600px] relative rounded-lg overflow-hidden border-2 border-gray-500/30">
              <img
                src="/me.jpg"
                alt=""
                className="absolute w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <ViewMoreButton to={"/about"} text="Ver más sobre mi" />
      </div>
    </section>
  );
};

export default AboutSection;
