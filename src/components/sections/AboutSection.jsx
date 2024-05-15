import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RiUser6Line } from "react-icons/ri";
import Container from "../container/Container";
import { useEffect } from "react";

const AboutSection = () => {
  const controlText = useAnimation();
  const controlImage = useAnimation();

  const [textRef, textInView] = useInView();
  const [imageRef, imageInView] = useInView();

  const textVariants = {
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0,
      translateX: -100,
    },
  };

  const imageVariants = {
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0,
      translateX: 100,
    },
  };

  useEffect(() => {
    if (textInView) {
      controlText.start("visible");
    } else {
      controlText.start("hidden");
    }
  }, [controlText, textInView]);

  useEffect(() => {
    if (imageInView) {
      controlImage.start("visible");
    } else {
      controlImage.start("hidden");
    }
  }, [controlImage, imageInView]);
  return (
    <Container>
      <div className="flex flex-col">
        <h2 className="md:text-3xl text-2xl flex items-center gap-2 text-gray-400 mb-10">
          <RiUser6Line />
          Sobre mí
        </h2>

        <div className="lg:grid lg:grid-cols-2 mb-10 flex flex-col-reverse">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={controlText}
            ref={textRef}
            className="space-y-5 md:[&>p]:text-lg text-wrap text-gray-400 font-light"
          >
            <p>
              ¡Hola! Soy Cristhian Rodríguez, aunque mis amigos me llaman
              Rodris. Originario de Ecuador, me especialicé en Ingeniería en
              Informática y Sistemas Computacionales. Aunque no me gradué
              oficialmente, tengo una sólida formación en este campo.
            </p>
            <p className="lg:block hidden">
              Mi inmersión en el mundo de la programación comenzó en el año
              2014, y desde entonces he estado comprometido con el aprendizaje y
              el crecimiento continuo. El Bootcamp de Henry fue un paso
              importante en mi camino, proporcionándome las habilidades y el
              conocimiento adicionales necesarios para convertirme en un
              desarrollador full stack.
            </p>
            <p className="lg:block hidden">
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
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={controlImage}
            ref={imageRef}
            className="flex items-start justify-center"
          >
            <div className="lg:w-[500px] lg:h-[600px] w-52 h-52 rounded-full relative lg:rounded-lg overflow-hidden border-2 border-gray-500/30 mb-10 lg:mb-0">
              <img
                src="/me.webp"
                alt=""
                className="absolute w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        {/* <ViewMoreButton to={"/about"} text="Ver más" /> */}
      </div>
    </Container>
  );
};

export default AboutSection;
