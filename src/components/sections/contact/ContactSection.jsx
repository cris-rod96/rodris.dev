import { useState } from "react";
import { RiMailLine } from "react-icons/ri";
import { Toaster, toast } from "sonner";
import { messageEndpoint } from "../../../api/message.api";

const ContactSection = () => {
  const [sending, setSending] = useState(false);
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
    setSending(true);
    try {
      if (!Object.values(messageData).some((data) => data === "")) {
        await messageEndpoint.saveMessage(messageData);
        toast.success(
          "Mensaje enviado con éxito. Nos comunicaremos contigo en unos momentos."
        );
        resetForm();
      } else {
        toast.error("Todos los campos son obligatorios");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSending(false);
    }
  };

  const resetForm = () => {
    setMessageData(initialState);
  };

  return (
    <section className="lg:py-10 py-20" id="contact">
      <div className="lg:w-4/5 mx-auto">
        {/* Formulario de contacto */}
        <div className="lg:w-3/4 mx-auto">
          <h3 className="lg:text-4xl text-2xl text-white mb-3">
            ¿Deseas que hablemos?
          </h3>
          <h5 className="text-gray-500">
            Si quieres hablar de un posible proyecto o simplemente saludarme,
            envíame un mensaje o un correo electrónico a{" "}
            <a
              href="mailto:crisrodam1996@gmail.com?subject=Deseo contactarte"
              className="text-white"
            >
              crisrodam1996@gmail.com
            </a>
          </h5>

          <form
            action=""
            className="mt-10 flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <div className="grid lg:grid-cols-2 md:gap-2">
              <div className="flex flex-col mb-5 lg:mb-0">
                <input
                  type="text"
                  name="name"
                  value={messageData.name}
                  onChange={handleMessageData}
                  className="px-3 py-5 outline-none bg-neutral-900 text-sm border border-gray-500/30 focus:border-gray-500/40 text-white placeholder:text-gray-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="flex flex-col mb-5 lg:mb-0">
                <input
                  type="email"
                  name="to"
                  value={messageData.to}
                  onChange={handleMessageData}
                  className="px-3 py-5 outline-none bg-neutral-900 text-sm border border-gray-500/30 focus:border-gray-500/40 text-white placeholder:text-gray-500"
                  placeholder="Tu correo electrónico"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <textarea
                name="message"
                value={messageData.message}
                cols="30"
                rows="10"
                onChange={handleMessageData}
                className="resize-none px-3 py-5 outline-none bg-neutral-900 text-sm border border-gray-500/30 focus:border-gray-500/40 text-white placeholder:text-gray-500"
                placeholder="Tu mensaje"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-5 border border-gray-500/20 py-3 bg-primary text-white font-bold text-lg hover:bg-primary/75 transition-colors duration-300"
            >
              {sending ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>

      <Toaster richColors />
    </section>
  );
};

export default ContactSection;
