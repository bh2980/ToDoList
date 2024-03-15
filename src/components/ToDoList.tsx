import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { ToDoContext } from "../context/ToDoContext";
import type { ToDoType } from "../context/ToDoContext.types";

function ToDoList() {
  const { toDos } = useContext(ToDoContext);

  return (
    <div
      className={`flex h-full w-full flex-col gap-4 overflow-auto ${
        toDos.length === 0 ? "items-center justify-center" : ""
      }`}
    >
      {toDos.length === 0 ? (
        <span>할 일 없음</span>
      ) : (
        toDos.map((todo: ToDoType) => (
          <ToDoItem key={todo.id} id={todo.id} todo={todo.todo} />
        ))
      )}
    </div>
  );
}

export default ToDoList;
