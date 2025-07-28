import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AddCart from "../componants/AddCart";
const SingleProduct = () => {
  const id = useParams().id - 1;
  const [products, setProducts] = useState({});
  const getProducts = async () => {
    const res = await axios.get(`http://localhost:3000/bakery`);
    setProducts(res.data.products[id]);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-7 p-20 ">
      <img
        src={products.image_url}
        alt={products.name}
        className="h-[400px] w-[400px] object-cover rounded-lg border-black border-[1px] border-solid"
      />
      <div className="col-span-2 flex flex-col gap-2 rounded-lg p-11 border-black border-[1px] border-solid">
        <h1 className="text-3xl">{products.name} </h1>
        <p className="max-w-72"> {products.description} </p>
        <div className="flex justify-between w-[500px]">
          <h2> {products.price} </h2>
         <AddCart v={products} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
