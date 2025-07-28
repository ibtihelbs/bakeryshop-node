import H1 from "./H1";

const Hero = () => {
  return (
    <section>
      <H1 content={"Delicious Pastries"} />
      <p className="m-auto max-w-96 text-center mb-3">
        Une boulangerie en ligne offrant une variété de pâtisseries fraîchement
        préparées, des gâteaux et du pain faits avec amour et les meilleurs
        ingrédients.
      </p>
      <div
        style={{
          backgroundImage: "url(./hero_mini.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          width: "500px",
          margin: "auto",
        }}
      >
        <img
          loading="lazy"
          src="./hero.avif"
          alt="hero"
          className="rounded-3xl h-[300px] w-[500px] border-black border-[5px] p-1 border-double"
        />
      </div>
    </section>
  );
};

export default Hero;
