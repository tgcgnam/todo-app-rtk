import { createSelector } from "@reduxjs/toolkit";

const todoListSelector = (state) => state.todoList;
const searchTextSelector = (state) => state.filters.search;
const searchStatusSelector = (state) => state.filters.status;
const searchPrioritySelector = (state) => state.filters.priority;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  searchStatusSelector,
  searchPrioritySelector,
  (todoList, searchText, status, priority) => {
    return todoList.filter((todo) => {
      const todos = todo.name.toLowerCase().includes(searchText.toLowerCase());

      if (status === "All") {
        return priority.length
          ? todos && priority.includes(todo.priority)
          : todos;
      }

      return (
        todos &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority.length ? todos && priority.includes(todo.priority) : todos)
      );
    });
  }
);
