import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  orderSummary: null, // Add this to store the order summary details
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { cart, price } = action.payload;
      const isAlready = state.cart.findIndex((v) => v.name === cart.name);
      if (isAlready !== -1) {
        state.cart[isAlready].quantity += 1;
      } else {
        state.cart.push({ ...cart, quantity: 1 });
      }
      state.totalPrice += price;
    },
    removeProduct: (state, action) => {
      const { id, price } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      state.totalPrice -= price;
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
    setOrderSummary: (state, action) => {
      state.orderSummary = action.payload;
    },
  },
});

export const { addProduct, removeProduct, clearCart, setOrderSummary } =
  cartSlice.actions;
export default cartSlice.reducer;
