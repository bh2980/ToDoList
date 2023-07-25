import { ToDoType } from "../Page/Main";
import ToDoItem from "./ToDoItem";

function ToDoList({ toDoList, removeToDo }: ToDoListProp) {
  return (
    <div
      className={`flex h-full w-full flex-col gap-4 overflow-auto ${
        toDoList.length === 0 ? "items-center justify-center" : ""
      }`}
    >
      {toDoList.length === 0 ? (
        <span>할 일 없음</span>
      ) : (
        toDoList.map((todo: ToDoType) => (
          <ToDoItem id={todo.id} todo={todo.todo} removeToDo={removeToDo} />
        ))
      )}
    </div>
  );
}

export default ToDoList;

interface ToDoListProp {
  toDoList: ToDoType[];
  removeToDo: (removeToDoID: number) => void;
}
