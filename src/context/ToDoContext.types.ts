import type { Dispatch } from "react";
import type ToDoAction from "../store/ToDos/actions/ToDoActions";

export interface ToDoType {
  id: number;
  todo: string;
}

export type ToDoDispatch = Dispatch<ToDoAction>;

export interface ToDosContextType {
  toDos: ToDoType[];
  dispatchToDos: ToDoDispatch;
}
