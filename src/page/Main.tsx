import { useState } from "react";

interface TodoType {
  id: number;
  todo: string;
}

function Main() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputString, setInputString] = useState<string>("");

  const addTodos = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputString.length > 0) {
      setTodos((current) => [
        ...current,
        { id: Date.now(), todo: inputString },
      ]);
      setInputString("");
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputString(e.target.value);
  };

  const removeTodo = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    removeTodoId: number,
  ) => {
    setTodos((current) => current.filter((todo) => todo.id !== removeTodoId));
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center bg-primary-900 px-24 py-32">
      <div className="h-full min-w-[360px]">
        <input
          type="text"
          className="placeholder-gray400 text-head4 flex w-full items-center rounded-lg bg-gray-800 px-32 py-24 text-white outline-none"
          placeholder="할 일 입력"
          value={inputString}
          onKeyDown={(e) => addTodos(e)}
          onChange={(e) => onChangeInput(e)}
        ></input>
        <div className="my-16 border-b-[1px] border-gray-300"></div>
        {todos.length === 0 ? (
          <div className="my-16 flex h-[calc(100%-96px)] flex-col items-center justify-center">
            <span className="text-head4 text-gray-300">할 일 없음</span>
          </div>
        ) : (
          <div className="my-16 flex h-[calc(100%-96px)] flex-col gap-16">
            {todos.map((todo) => {
              return (
                <div className="flex flex-row gap-8" key={todo.id}>
                  <div className="text-head4 flex w-4/5 items-center rounded-lg bg-gray-800 px-32 py-24 text-primary-50">
                    {todo.todo}
                  </div>
                  <button
                    className="text-body1 w-1/5 rounded-lg bg-red-500 text-white hover:bg-red-700"
                    onClick={(e) => removeTodo(e, todo.id)}
                  >
                    삭제
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
