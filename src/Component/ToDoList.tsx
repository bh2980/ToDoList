import { ToDoType } from "../page/Main";
import ToDoItem from "./ToDoItem";
import { useAppSelector } from "../hooks/storeHooks";

function ToDoList() {
  const toDos = useAppSelector((store) => store.todos.toDos);

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
