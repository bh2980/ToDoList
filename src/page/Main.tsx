import { useRef, useState } from "react";
import Divider from "../Component/Divider";
import ToDoInput from "../Component/ToDoInput";
import ToDoList from "../Component/ToDoList";

export interface ToDoType {
  id: number;
  todo: string;
}

function Main() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [toDos, setToDos] = useState<ToDoType[]>([]);

  const addToDo = (todo: string) => {
    setToDos((current) => [...current, { id: Date.now(), todo }]);
  };

  const inputEnterListener = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      addToDo(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  const addButtonListener = () => {
    if (inputRef.current) addToDo(inputRef.current.value);
  };

  const removeToDo = (removeToDoID: number) => {
    setToDos((current) => current.filter((todo) => todo.id !== removeToDoID));
  };

  return (
    <div className="text-2xl flex h-screen w-full flex-col items-center justify-center gap-3 bg-slate-900 p-8 text-blue-100">
      <ToDoInput
        inputRef={inputRef}
        addButtonListener={addButtonListener}
        inputEnterListener={inputEnterListener}
      />
      <Divider />
      <ToDoList toDoList={toDos} removeToDo={removeToDo} />
    </div>
  );
}

export default Main;
