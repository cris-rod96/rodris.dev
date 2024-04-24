import { useState } from "react";
import { RiMailLine } from "react-icons/ri";
import { Toaster, toast } from "sonner";
import { messageEndpoint } from "../../../api/message.api";

const ContactSection = () => {
  const initialState = {
    to: "",
    name: "",
    message: "",
  };
  const [messageData, setMessageData] = useState(initialState);

  const handleMessageData = (e) => {
    const { name, value } = e.target;
    setMessageData({
      ...messageData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!Object.values(messageData).some((data) => data === "")) {
        const response = await messageEndpoint.saveMessage(messageData);
        toast.success(response.data.message);
        resetForm();
      } else {
        toast.error("Todos los campos son obligatorios");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const resetForm = () => {
    setMessageData(initialState);
  };

  return (
    <section className="border-b border-gray-500/20 py-10" id="contact">
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

          <form
            action=""
            className="mt-10 flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-lg">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={messageData.name}
                  onChange={handleMessageData}
                  className="px-2 py-3 outline-none bg-neutral-900 text-sm border border-transparent focus:border-gray-500/10"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  name="to"
                  value={messageData.to}
                  onChange={handleMessageData}
                  className="px-2 py-3 outline-none bg-neutral-900 text-sm border border-transparent focus:border-gray-500/10"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Mensaje</label>
              <textarea
                name="message"
                value={messageData.message}
                cols="30"
                rows="10"
                onChange={handleMessageData}
                className="resize-none outline-none border border-transparent focus:border-gray-500/10 px-3 py-2 bg-neutral-900 text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-5 border border-gray-500/20 py-3 bg-primary text-white font-bold text-lg hover:bg-primary/75 transition-colors duration-300"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>

      <Toaster richColors />
    </section>
  );
};

export default ContactSection;
