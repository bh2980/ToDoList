import { useState } from "react";
import Tile from "../Atom/Tile";
import Line from "../Atom/Line";

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
    <div className="flex h-[720rem] w-[360rem] flex-col items-center bg-primary-900 px-24 py-32">
      <Tile>
        <input
          type="text"
          className="placeholder-gray300 text-head4 w-full bg-gray-800 text-gray-50 outline-none"
          placeholder="할 일 입력"
          value={inputString}
          onKeyDown={(e) => addTodos(e)}
          onChange={(e) => onChangeInput(e)}
        ></input>
      </Tile>
      <Line />
      {todos.length === 0 ? (
        <div className="my-16 flex h-[calc(100%-96rem)] w-full flex-col items-center justify-center">
          <span className="text-head4 text-gray-300">할 일 없음</span>
        </div>
      ) : (
        <div className="my-16 flex h-[calc(100%-96rem)] w-full flex-col gap-16">
          {todos.map((todo) => {
            return (
              <div className="flex flex-row gap-8" key={todo.id}>
                <Tile>{todo.todo}</Tile>
                <button
                  className="text-head4 h-[64rem] w-[64rem] rounded-lg bg-red-500 text-gray-50 hover:bg-red-700"
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
  );
}

export default Main;
