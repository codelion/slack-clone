import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

/**
 * This function retrieves the room Id from the application state.
 * 
 * @param {Object} state - The application state object which includes the roomId as one of the properties. 
 * @returns {string} Returns the roomId extracted from the application state.
 */
export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
