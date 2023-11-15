import { ToDoType } from "../../page/Main";
import ToDoAction from "./actions/ToDoActions";

function ToDoReducer(state: ToDoType[], action: ToDoAction) {
  switch (action.type) {
    case "CREATE":
      return [...state, { id: Date.now(), todo: action.todo }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
  }
}

export default ToDoReducer;
