import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: null,
    info: [],
  },
  reducers: {
    login: (state, action) => {
      state.current = action.payload;
    },
    addInfo: (state, action) => {
      state.info.push(action.payload);
    },
  },
});
export const { addInfo, login } = userSlice.actions;
export default userSlice.reducer;
