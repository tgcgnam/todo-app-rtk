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
