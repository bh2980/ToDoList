import Divider from "../Component/Divider";
import ToDoInput from "../Component/ToDoInput";
import ToDoList from "../Component/ToDoList";

export interface ToDoType {
  id: number;
  todo: string;
}

function Main() {
  return (
    <div className="text-2xl flex h-screen w-full flex-col items-center justify-center gap-3 bg-slate-900 p-8 text-blue-100">
      <Divider />
      <ToDoInput />
      <Divider />
      <ToDoList />
    </div>
  );
}

export default Main;
