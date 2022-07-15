const initState = [
  { id: 1, name: "Learn React", priority: "Medium", completed: true },
  { id: 2, name: "Learn Javascript", priority: "High", completed: false },
  { id: 3, name: "Learn MySQL", priority: "Low", completed: false },
];

const TodosSlide = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default TodosSlide;
