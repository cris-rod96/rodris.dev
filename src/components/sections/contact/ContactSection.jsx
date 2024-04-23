import { RiMailLine } from "react-icons/ri";

const ContactSection = () => {
  return (
    <section className="border-b border-gray-500/20 py-10">
      <div className="lg:w-4/5 mx-auto">
        <h2 className="text-3xl flex items-center gap-2 text-gray-500 mb-10">
          <RiMailLine />
          Contáctame
        </h2>

        {/* Formulario de contacto */}
        <div className="w-3/4 mx-auto">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            vitae!
          </h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero
            quisquam cum a culpa totam architecto exercitationem, doloribus
            perspiciatis blanditiis!
          </h5>

          <form action="" className="mt-10 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-lg">
                  Nombre
                </label>
                <input
                  type="text"
                  className="px-2 py-3 outline-none bg-neutral-900 text-sm border border-transparent focus:border-gray-500/10"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  className="px-2 py-3 outline-none bg-neutral-900 text-sm border border-transparent focus:border-gray-500/10"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Mensaje</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="resize-none outline-none border border-transparent focus:border-gray-500/10 px-3 py-2 bg-neutral-900 text-sm"
              ></textarea>
            </div>

            <button className="mt-5 border border-gray-500/20 py-3 bg-primary text-white font-bold text-lg hover:bg-primary/75 transition-colors duration-300">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
