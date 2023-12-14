import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "liveChat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(18, 1);
      //   state.message.splice(10, state.message.length - 10);
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
