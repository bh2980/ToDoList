type ToDoAction =
  | { type: "CREATE"; todo: string }
  | { type: "REMOVE"; id: number };

export default ToDoAction;
