import { createSlice } from "@reduxjs/toolkit";

const SearchSugg = createSlice({
  name: "addSearch",
  initialState: {
    searchArr: [],
  },
  reducers: {
    addSearchItem: (state, action) => {
      state.searchArr.push(action.payload);
    },
  },
});

export const { addSearchItem } = SearchSugg.actions;

export default SearchSugg.reducer;
