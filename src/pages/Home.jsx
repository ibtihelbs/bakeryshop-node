import { useSelector } from "react-redux";
import Contact from "../componants/Contact";
import Hero from "../componants/Hero";
import H1 from "../componants/H1";
import Products from "../componants/Products";
import Map from "../componants/Map";

const Home = () => {
  return (
    <div>
      <Hero />
      <H1 content={"Latest pastries"} />
      <Products start={3} end={6} />
      <H1 content={"Hottest pastries"} />
      <Products start={5} end={8} />
      <Contact />
      <Map />
    </div>
  );
};

export default Home;
