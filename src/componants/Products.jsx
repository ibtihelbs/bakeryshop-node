import axios from "axios";
import { useEffect, useState } from "react";
import Singleproduct from "./Singleproduct";
const Products = ({ start, end }) => {
  const [products, setProducts] = useState([]);
  const isLoading = Boolean(products.length);
  const getProducts = async () => {
    const res = await axios.get("http://localhost:3000/bakery");
    setProducts(res.data.products);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div
      className="grid md:grid-cols-3 grid-cols-1 px-10 
     gap-5"
    >
      {isLoading ? (
        products
          .slice(start, end)
          .map((v) => <Singleproduct key={v.id} prod={v} />)
      ) : (
        <h1>IS COOKING .... </h1>
      )}
    </div>
  );
};

export default Products;
