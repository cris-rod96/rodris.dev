import React from "react";
import Container from "../../components/container/Container";
import { BtnViewAll } from "../../components/buttons";
import { motion } from "framer-motion";
import { PROFILE_DATA } from "../../data";

const About = () => {
  return (
    <Container id={"about"}>
      <div className="lg:w-1/2 mx-auto space-y-5 flex flex-col pt-10 lg:py-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-5"
        >
          <h2 className="text-3xl text-white">Mas sobre mi</h2>
          <p className="md:text-lg text-gray-400">
            Mi travesía en el emocionante mundo de la programación comenzó como
            respuesta a una desafortunada circunstancia. Hay quienes dicen que
            cuando una puerta se cierra, una ventana se abre. Mi nombre es
            Cristhian y esta es mi historia.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:h-[600px] h-[300px] relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img
            src="/me.webp"
            alt=""
            className="absolute w-full h-full object-cover  grayscale rounded-lg"
          />
        </motion.div>
        <div className="flex flex-col gap-3 ">
          {PROFILE_DATA.map((data, index) => (
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              key={index}
              className="md:text-lg text-gray-400 text-justify lg:text-left"
            >
              {data}
            </motion.p>
          ))}
        </div>

        <BtnViewAll text="¡Vamos a colaborar!" to={"/contact"} />
      </div>
    </Container>
  );
};

export default About;
