import Container from "../container/Container";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { SOCIAL_DATA } from "../../data";
import { BtnAvailable, BtnSocial } from "../buttons";

const IntroSection = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 1.5,
      },
    },
    hidden: {
      opacity: 0,
      translateX: 100,
    },
  };

  useEffect(() => {
    control.start(inView ? "visible" : "hidden");
  }, [control, inView]);

  return (
    <Container>
      <motion.div
        ref={ref}
        variants={variants}
        animate={control}
        initial={"hidden"}
      >
        <div className="flex md:flex-row flex-col-reverse md:items-start md:justify-between mb-10 pb-10 pt-10 lg:pt-0">
          <div className="relative w-32 h-32 md:rounded-lg rounded-full overflow-hidden md:mx-0 mx-auto">
            <img
              src="/me.webp"
              alt="Profile Image"
              className="absolute w-full h-full object-cover"
            />
          </div>
          <BtnAvailable text="Disponible" to="/contact" />
        </div>

        <div className="md:max-w-3xl mb-14">
          <h3 className="md:text-4xl text-2xl text-wrap mb-5 [&>span]:text-primary [&>span]:font-light">
            Hola, me llamo <span>Cristhian</span>. Soy un{" "}
            <span>Backend Developer</span> && <span>Frontend</span> Explorer.
          </h3>
          <h5 className="text-gray-400 lg:text-lg text-wrap font-light">
            Soy un Desarrollador Web especializado en el Backend, sin temor a
            enfrentarme al Frontend. Mi enfoque se centra en la creación de
            soluciones innovadoras y eficientes. En constante aprendizaje,
            ahupando las nuevas tendencias.
          </h5>
        </div>

        <div className="flex items-center gap-2">
          {SOCIAL_DATA.map((item) => (
            <BtnSocial Icon={item.icon} label={item.label} to={item.link} />
          ))}
        </div>
      </motion.div>
    </Container>
  );
};

export default IntroSection;
