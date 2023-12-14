import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "Search",
  initialState: {},
  reducers: {
    SearchKeeper: (state, action) => {
      return { ...action.payload, ...state };
      //   state = { ...action.payload, ...state };
    },
  },
});

export const { SearchKeeper } = SearchSlice.actions;

export default SearchSlice.reducer;
