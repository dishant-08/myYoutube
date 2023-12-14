import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import SearchSlice from "./SearchSlice";
import chatSlice from "./chatSlice";
import SearchSugg from "./SearchSugg";

const store = configureStore({
  reducer: {
    Sidebar: appSlice,
    Search: SearchSlice,
    liveChat: chatSlice,
    addSearch: SearchSugg,
  },
});

export default store;
