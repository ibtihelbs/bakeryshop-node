import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../store/userSlice";
import { clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import Button from "../componants/Button";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfoFn = (Info) => {
    // Retrieve the current array from localStorage or initialize an empty array if it doesn't exist
    const userInfoRead = JSON.parse(localStorage.getItem("userInfo")) || [];

    // Check if the Info object already exists in the array
    const findIndex = userInfoRead.findIndex(
      (v) => v.fullName === Info.fullName && v.address === Info.address
    );

    if (findIndex === -1) {
      // If the object doesn't exist, add it to the array
      userInfoRead.push(Info);
    } else {
      // Optionally update the existing entry (this depends on your needs)
      userInfoRead[findIndex] = Info;
    }

    // Save the updated array back to localStorage
    localStorage.setItem("userInfo", JSON.stringify(userInfoRead));
  };
  const summeryOrderFn = (Info) => {
    const order = JSON.parse(localStorage.getItem("orders")) || [];
    order.push(Info);
    const orderAt = new Date().getDate;
    localStorage.setItem("orders", JSON.stringify({ ...order, orderAt }));
  };
  const orderSummary = useSelector((state) => state.cartReducer.orderSummary);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(addInfo(formData));
      userInfoFn(formData);
      summeryOrderFn(orderSummary);
      setFormData({
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      });
      setConfirmationMessage("Order placed successfully!");
      dispatch(clearCart()); // Clear the cart after placing the order
      setTimeout(() => {
        navigate("/"); // Redirect to home or another page
      }, 2000); // 2-second delay before redirecting
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <form
          onSubmit={handlePlaceOrder}
          className="bg-white border-solid border-black border-[1px] rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-center text-2xl font-bold mb-4">Checkout</h2>
          <div className="grid grid-cols-2">
            <div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="border-solid border-black border-[1px] appearance-none rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.fullName && (
                  <span className="text-red-500 text-xs">
                    {errors.fullName}
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border-solid border-black border-[1px] appearance-none rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.address && (
                  <span className="text-red-500 text-xs">{errors.address}</span>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="border-solid border-black border-[1px] appearance-none rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.city && (
                  <span className="text-red-500 text-xs">{errors.city}</span>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="postalCode"
                >
                  Postal Code
                </label>
                <input
                  id="postalCode"
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="border-solid border-black border-[1px] appearance-none rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.postalCode && (
                  <span className="text-red-500 text-xs">
                    {errors.postalCode}
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cardNumber"
                >
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="border-solid border-black border-[1px] appearance-none rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.cardNumber && (
                  <span className="text-red-500 text-xs">
                    {errors.cardNumber}
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="expiryDate"
                >
                  Expiry Date
                </label>
                <input
                  id="expiryDate"
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="border-solid border-black border-[1px] appearance-none rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.expiryDate && (
                  <span className="text-red-500 text-xs">
                    {errors.expiryDate}
                  </span>
                )}
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cvv"
                >
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="border-solid border-black border-[1px] appearance-none rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.cvv && (
                  <span className="text-red-500 text-xs">{errors.cvv}</span>
                )}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">Order Summary</h3>
              {orderSummary ? (
                <>
                  <ul>
                    {orderSummary.items.map(({ id, name, price }) => (
                      <li key={id}>
                        {name} - {price} TND
                      </li>
                    ))}
                  </ul>
                  <h4>Total: {orderSummary.total} TND</h4>
                </>
              ) : (
                <p>No items in the order.</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <Button content={"Place Order"} type={"submit"} />
            </div>
          </div>
        </form>

        {/* Simple Order Confirmation Message */}
        {confirmationMessage && (
          <div className="absolute bg-[rgba(0,0,0,0.5)] top-0 bottom-0 right-0 w-screen h-screen">
            <div className="confirmation-message h-28 w-1/2 m-auto mt-4 bg-white border-solid rounded-lg border-[1px] border-black text-green-500">
              <h1 className="text-center py-5">{confirmationMessage}</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
