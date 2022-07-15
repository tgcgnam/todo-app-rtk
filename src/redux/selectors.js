import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;

export const searchTextSelector = (state) => state.filters.search;

export const searchStatusSelector = (state) => state.filters.status;

export const searchPrioritySelector = (state) => state.filters.priority;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  searchStatusSelector,
  searchPrioritySelector,
  (todoList, searchText, status, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
              priority.includes(todo.priority)
          : todo.name.toLowerCase().includes(searchText.toLowerCase());
      }

      return (
        todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority.length
          ? todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
            priority.includes(todo.priority)
          : true)
      );
    });
  }
);
