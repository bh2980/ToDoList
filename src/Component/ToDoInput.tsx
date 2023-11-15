import { useContext, useRef } from "react";
import { ToDoContext } from "../page/Main";

function ToDoInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { dispatchToDos } = useContext(ToDoContext);

  const addToDo = (todo: string) => {
    dispatchToDos({ type: "CREATE", todo });
    inputRef!.current!.value = "";
  };

  const inputEnterListener = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      addToDo(inputRef.current.value);
    }
  };

  const addButtonListener = () => {
    if (inputRef.current) addToDo(inputRef.current.value);
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
