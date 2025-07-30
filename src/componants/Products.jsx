import axios from "axios";
import { useEffect, useState } from "react";
import Singleproduct from "./Singleproduct";
import H1 from "./H1";

const Products = ({ start, end }) => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
      console.log("Fetched products:", products);
    } catch (error) {
      console.log("Error fetching products:", error.message || error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 px-10 gap-5">
      {products ? (
        products
          .slice(start, end)
          .map((v) => <Singleproduct key={v._id} prod={v} />)
      ) : (
        <h1>IS COOKING ....</h1>
      )}
    </div>
  );
};

export default Products;