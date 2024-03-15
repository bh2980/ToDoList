import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

function ToDoItem({ id, todo }: ToDoItemProp) {
  const { dispatchToDos } = useContext(ToDoContext);

  const removeToDo = (removeToDoID: number) => {
    dispatchToDos({ type: "REMOVE", id: removeToDoID });
  };

  return (
    <div className="flex h-[80px] min-h-[80px] w-full gap-4">
      <div className="flex w-full items-center rounded-lg bg-slate-600 px-8">
        <span>{todo}</span>
      </div>
      <button
        className="w-[96px] rounded-lg bg-red-600 hover:bg-red-800"
        onClick={() => removeToDo(id)}
      >
        삭제
      </button>
    </div>
  );
}

export default ToDoItem;

interface ToDoItemProp {
  id: number;
  todo: string;
}
