import { useRef } from "react";
import { useAppDispatch } from "../hooks/storeHooks";
import { addToDo } from "../store/ToDoSlice";

function ToDoInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const addTodoList = (todo: string) => {
    dispatch(addToDo(todo));
    inputRef!.current!.value = "";
  };

  const inputEnterListener = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      addTodoList(inputRef.current.value);
    }
  };

  const addButtonListener = () => {
    if (inputRef.current) addTodoList(inputRef.current.value);
  };

  return (
    <div className="flex h-[80px] w-full gap-4">
      <input
        className="h-full w-full rounded-lg bg-slate-600 px-8 outline-none"
        placeholder="할 일 입력"
        ref={inputRef}
        onKeyDown={(e) => inputEnterListener(e)}
      ></input>
      <button
        className="w-[96px] rounded-lg bg-indigo-600 hover:bg-indigo-800"
        onClick={addButtonListener}
      >
        추가
      </button>
    </div>
  );
}

export default ToDoInput;
