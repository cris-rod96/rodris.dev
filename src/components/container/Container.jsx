const Container = ({ children, id }) => {
  return (
    <section className="border-b border-gray-500/20 py-10 pl-5 pr-8" id={id}>
      <div className="lg:w-5/6 lg:mx-auto">{children}</div>
    </section>
  );
};

export default Container;
