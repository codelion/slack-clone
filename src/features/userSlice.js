import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

/**
 * Function to select the user from the state.
 * @param {Object} state - The state object ideally containing a user property.
 * @returns {Object} - Returns the user object from the state.
 */
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
