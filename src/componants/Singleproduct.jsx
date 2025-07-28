import { Link } from "react-router-dom";
import AddCart from "./AddCart";

const Singleproduct = ({ prod }) => {
  // Modify the image path for the minified version
  const minified = prod.image_url.replace("./images", "./images/mini");

  return (
    <div className="p-1 border-solid border-[1px] border-black rounded-lg">
      <Link
        to={`/single/${prod.id}`}
        className="block w-full h-[300px]"
        style={{
          backgroundImage: `url(${minified})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={prod.image_url}
          alt={prod.name}
          loading="lazy"
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </Link>

      <div className="flex justify-between p-4">
        <div>
          <h2>{prod.name}</h2>
          <p className="text-xl">{prod.price}</p>
        </div>
        <AddCart v={prod} />
      </div>
    </div>
  );
};

export default Singleproduct;
