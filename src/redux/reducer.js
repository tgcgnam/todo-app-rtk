import { combineReducers } from "redux";
import FiltersSlide from "../components/Filters/FiltersSlide";
import TodosSlide from "../components/TodoList/TodosSlide";

const rootReducer = combineReducers({
  filters: FiltersSlide,
  todoList: TodosSlide,
});

export default rootReducer;
