import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "Sidebar",
  initialState: {
    isSidebarOpen: true, // must create close modal at watch page
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = appSlice.actions;

export default appSlice.reducer;
