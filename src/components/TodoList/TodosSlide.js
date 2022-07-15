const initState = [
  { id: 1, name: "Learn React", priority: "Medium", completed: true },
  { id: 2, name: "Learn Javascript", priority: "High", completed:false },
  { id: 3, name: "Learn MySQL", priority: "Low", completed:false },
  { id: 4, name: "Learn Todo", priority: "Low", completed:true },
];

const TodosSlide = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default TodosSlide;
