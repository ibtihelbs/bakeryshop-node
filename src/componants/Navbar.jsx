import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
const Navbar = ({ setIsOpen, isOpen }) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/Shop" },
    { name: "Contact", link: "../#contact" },
  ];
  const [user, setuser] = useState(false);
  const isUser = useSelector((state) => state.userReducer.current);
  console.log(Boolean(isUser));
  return (
    <nav className="flex justify-between relative items-center px-9 py-5">
      <Link to={"/"}>
        {" "}
        <h2 className="text-2xl">Sweet Dreams</h2>{" "}
      </Link>
      <ul className="flex gap-3 justify-center">
        {links.map((v, i) => (
          <li key={i}>
            <Link to={v.link}>{v.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <button onClick={() => setuser(!user)}>
          <img src="./user.png" alt="user" className="h-7 w-7" />
        </button>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src="./add-to-cart.png" alt="cart" className="h-8 w-8" />
        </button>
      </div>
      {user && (
        <ul className="absolute right-5 -bottom-full p-4 bg-white rounded-lg border-[1px] border-solid border-black">
          {!Boolean(isUser) ? (
            <>
              <li>
                <Link to={"/login"}> Login </Link>
              </li>
              <li>
                <Link to={"/register"}> Register </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to={"/account"}> Account </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
