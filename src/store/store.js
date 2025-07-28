import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
const store = configureStore({
  reducer: {
    cartReducer,
    userReducer,
  },
});
export { store };
