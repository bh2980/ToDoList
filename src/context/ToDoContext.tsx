import { PropsWithChildren, createContext, useReducer } from "react";
import type { ToDosContextType } from "./ToDoContext.types";
import ToDoReducer from "../store/ToDos/ToDoReducer";

export const ToDoContext = createContext<ToDosContextType>({
  toDos: [],
  dispatchToDos: () => {},
});

const ToDoProvider = ({ children }: PropsWithChildren) => {
  //useState 대신 useReducer를 사용, 타입은 ToDoReducer에서 선언해준 타임으로 추론
  const [toDos, dispatchToDos] = useReducer(ToDoReducer, []);

  return (
    <ToDoContext.Provider value={{ toDos, dispatchToDos }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
