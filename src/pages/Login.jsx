import React, { useState } from "react";
import Button from "../componants/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/userSlice";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginInfo));
    // Clear the form fields after submission
    setLoginInfo({
      email: "",
      username: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white border-solid border-black border-[1px] rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={loginInfo.email}
              onChange={handleChange}
              className="border-solid border-black border-[1px] appearance-none rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              value={loginInfo.username}
              onChange={handleChange}
              className="border-solid border-black border-[1px] appearance-none rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={loginInfo.password}
              onChange={handleChange}
              className="border-solid border-black border-[1px] appearance-none rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <Link to="../Register">
            <p className="text-[12px] mb-4 capitalize underline">
              Have no account yet? Click to Register
            </p>
          </Link>
          <div className="flex items-center justify-between">
            <Button content={"Login"} type={"submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
