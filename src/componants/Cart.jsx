import { useSelector, useDispatch } from "react-redux";
import { removeProduct, setOrderSummary } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch(
      setOrderSummary({
        items: cart,
        total: totalPrice,
      })
    );
  };

  return (
    <div className="absolute w-[300px] p-5 flex flex-col gap-4 min-h-8 bg-white right-5 border-black border-solid border-[1px] rounded-lg">
      {totalPrice !== 0 ? (
        <>
          {cart.map(({ id, image_url, name, price }) => (
            <div
              className="border-black p-2 flex justify-between border-solid border-[1px] rounded-lg"
              key={id}
            >
              <img
                src={image_url}
                alt={name}
                className="w-10 h-10 rounded-lg"
              />
              <div>
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    removeProduct({
                      id,
                      price: parseFloat(price.replace(" TND", "")),
                    })
                  )
                }
              >
                X
              </button>
            </div>
          ))}
          <div className="flex justify-between">
            <div>
              <h1>Total Price:</h1> <span>{totalPrice} TND</span>
            </div>
            <Link to={"/checkout"} onClick={handleCheckout}>
              Checkout
            </Link>
          </div>
        </>
      ) : (
        <h1 className="text-center">Empty cart :(</h1>
      )}
    </div>
  );
};

export default Cart;
