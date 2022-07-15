export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const searchStatusChange = (status) => {
  return {
    type: "filters/searchStatusChange",
    payload: status,
  };
};

export const searchPriorityChange = (priority) => {
  return {
    type: "filters/searchPriorityChange",
    payload: priority,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};
