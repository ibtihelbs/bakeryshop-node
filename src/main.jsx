import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import "./index.css";
import Root from "./pages/Root.jsx";
import { store } from "./store/store.js";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Account = lazy(() => import("./pages/Account"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading Home...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "shop",
        element: (
          <Suspense fallback={<div>Loading Shop...</div>}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "single/:id",
        element: (
          <Suspense fallback={<div>Loading Product...</div>}>
            <SingleProduct />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<div>Loading Checkout...</div>}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<div>Loading Register...</div>}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<div>Loading Login...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "account",
        element: (
          <Suspense fallback={<div>Loading Account...</div>}>
            <Account />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
