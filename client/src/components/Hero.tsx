const Hero = () => {
  return (
    <section className="text-center flex flex-col gap-4 mt-8">
      <h1 className="headingText">
        Welcome to <span className="text-red-400">COMPLIT</span>
      </h1>
      <p className="subHeadingText">This is an AI powered chatbot </p>
      <p className="desc">
        Do you have a question or you want to learn anything without wasting
        much time? then add a prompt!
      </p>
    </section>
  );
};

export default Hero;
