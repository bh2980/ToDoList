import { useDispatch } from "react-redux";
import { removeToDo } from "../store/ToDoSlice";

function ToDoItem({ id, todo }: ToDoItemProp) {
  const dispatch = useDispatch();

  const removeToDoList = (removeToDoID: number) => {
    dispatch(removeToDo(removeToDoID));
  };

  return (
    <div className="flex h-[80px] min-h-[80px] w-full gap-4">
      <div className="flex w-full items-center rounded-lg bg-slate-600 px-8">
        <span>{todo}</span>
      </div>
      <button
        className="w-[96px] rounded-lg bg-red-600 hover:bg-red-800"
        onClick={() => removeToDoList(id)}
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
