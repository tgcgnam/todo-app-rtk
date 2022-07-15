// import { legacy_createStore as createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducer";

// const composeEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composeEnhancers);

import { configureStore } from "@reduxjs/toolkit";
import FiltersSlide from "../components/Filters/filtersSlide";
import TodosSlide from "../components/TodoList/todosSlide";

const store = configureStore({
  reducer: {
    filters: FiltersSlide.reducer,
    todoList: TodosSlide.reducer,
  },
});

export default store;
