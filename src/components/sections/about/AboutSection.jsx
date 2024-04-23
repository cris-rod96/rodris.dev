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
          <div className="space-y-5 [&>p]:text-lg text-wrap text-gray-300">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, iure sunt blanditiis alias, ea nam, libero enim
              fugiat eligendi quo molestiae? Dignissimos quae iste officiis.
              Eius minima ipsa veniam consequuntur iste dolores recusandae esse
              dolorum sint repellat provident, velit nostrum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ut
              et tempore optio dolores soluta, molestias sapiente doloremque
              ratione exercitationem incidunt! Voluptate sapiente temporibus
              veniam incidunt impedit, animi vitae amet esse, magnam molestiae
              aliquid culpa provident reiciendis molestias quas ut in sunt.
              Asperiores dolorem accusamus illum error saepe similique commodi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ut
              et tempore optio dolores soluta, molestias sapiente doloremque
              ratione exercitationem incidunt! Voluptate sapiente temporibus
              veniam incidunt impedit, animi vitae amet esse, magnam molestiae
              aliquid culpa provident reiciendis molestias quas ut in sunt.
              Asperiores dolorem accusamus illum error saepe similique commodi.
            </p>
          </div>
          <div className="flex items-center justify-center">
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
