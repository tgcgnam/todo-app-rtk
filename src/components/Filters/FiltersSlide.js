// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// const FiltersSlide = (state = initState, action) => {
//   console.log({ state, action });
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/searchStatusChange":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filters/searchPriorityChange":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };
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
