import { createContext, Dispatch, useReducer } from "react";
import Divider from "../Component/Divider";
import ToDoInput from "../Component/ToDoInput";
import ToDoList from "../Component/ToDoList";
import ToDoAction from "../store/ToDos/actions/ToDoActions";
import ToDoReducer from "../store/ToDos/ToDoReducer";

export interface ToDoType {
  id: number;
  todo: string;
}

// type ToDoDispatch = Dispatch<ToDoAction>;
export interface ToDoDispatch extends Dispatch<ToDoAction> {}

// interface는 무조건 객체
// export type ToDosContextType = [ToDoType[], ToDoDispatch];
export interface ToDosContextType {
  toDos: ToDoType[];
  dispatchToDos: ToDoDispatch;
}

export const ToDoContext = createContext<ToDosContextType>({
  toDos: [],
  dispatchToDos: () => {},
});

// export const ToDoContext = createContext<ToDosContextType>([[], () => {}]);

function Main() {
  const [toDos, dispatchToDos] = useReducer(ToDoReducer, []); //useState 대신 useReducer를 사용, 타입은 ToDoReducer에서 선언해준 타임으로 추론

  return (
    <div className="text-2xl flex h-screen w-full flex-col items-center justify-center gap-3 bg-slate-900 p-8 text-blue-100">
      <Divider />
      <ToDoContext.Provider value={{ toDos, dispatchToDos }}>
        <ToDoInput />
        <Divider />
        <ToDoList />
      </ToDoContext.Provider>
    </div>
  );
}

export default Main;
