import { useRef, useState } from "react";
import Divider from "../Component/Divider";

export interface ToDoType {
  id: number;
  todo: string;
}

function Main() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [toDoList, setToDoList] = useState<ToDoType[]>([]);

  const addToDo = (todo: string) => {
    setToDoList((current) => [...current, { id: Date.now(), todo }]);
  };

  const inputEnterListener = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      addToDo(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  const removeToDo = (removeToDoID: number) => {
    setToDoList((current) =>
      current.filter((todo) => todo.id !== removeToDoID),
    );
  };

  return (
    <div className="text-2xl flex h-screen w-full flex-col items-center justify-center gap-3 bg-slate-900 p-8 text-blue-100">
      <div className="flex h-[80px] w-full gap-4">
        <input
          className="h-full w-full rounded-lg bg-slate-600 px-8 outline-none"
          placeholder="할 일 입력"
          ref={inputRef}
          onKeyDown={(e) => inputEnterListener(e)}
        ></input>
        <button className="w-[96px] rounded-lg bg-indigo-600 hover:bg-indigo-800">
          추가
        </button>
      </div>
      <Divider />
      <div
        className={`flex h-full w-full flex-col gap-4 overflow-auto ${
          toDoList.length === 0 ? "items-center justify-center" : ""
        }`}
      >
        {toDoList.length === 0 ? (
          <span>할 일 없음</span>
        ) : (
          toDoList.map((todo: ToDoType) => (
            <div
              className="flex h-[80px] min-h-[80px] w-full gap-4"
              key={todo.id}
            >
              <div className="flex w-full items-center rounded-lg bg-slate-600 px-8">
                <span>{todo.todo}</span>
              </div>
              <button
                className="w-[96px] rounded-lg bg-red-600 hover:bg-red-800"
                onClick={() => removeToDo(todo.id)}
              >
                삭제
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Main;
