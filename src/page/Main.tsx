import Divider from "../components/Divider";
import ToDoInput from "../components/ToDoInput";
import ToDoList from "../components/ToDoList";
import ToDoProvider from "../context/ToDoContext";

function Main() {
  return (
    <div className="text-2xl flex h-screen w-full flex-col items-center justify-center gap-3 bg-slate-900 p-8 text-blue-100">
      <Divider />
      <ToDoProvider>
        <ToDoInput />
        <Divider />
        <ToDoList />
      </ToDoProvider>
    </div>
  );
}

export default Main;
