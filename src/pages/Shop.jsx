import H1 from "../componants/H1";
import Products from "../componants/Products";
const Shop = () => {
  return (
    <div>
      <H1 content={"Our Shop"} align={"center"} />
      <Products start={0} end={-1} />
    </div>
  );
};

export default Shop;
