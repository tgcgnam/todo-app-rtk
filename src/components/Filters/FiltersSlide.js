import { createSlice } from "@reduxjs/toolkit";

const FiltersSlide = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    searchStatusChange: (state, action) => {
      state.status = action.payload;
    },
    searchPriorityChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export default FiltersSlide;
