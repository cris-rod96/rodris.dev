const BtnSubmit = ({ sending }) => {
  return (
    <button
      type="submit"
      className="mt-5 border border-gray-500/20 py-3 bg-primary text-white font-bold text-lg hover:bg-primary/75 transition-colors duration-300"
    >
      {sending ? "Enviando..." : "Enviar mensaje"}
    </button>
  );
};

export default BtnSubmit;
