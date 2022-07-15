const initState = {
  search: "",
  status: "All",
  priority: [],
};

const FiltersSlide = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/searchStatusChange":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/searchPriorityChange":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default FiltersSlide;
