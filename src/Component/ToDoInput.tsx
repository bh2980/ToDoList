function ToDoInput({
  inputRef,
  inputEnterListener,
  addButtonListener,
}: ToDoInputProp) {
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

interface ToDoInputProp {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  inputEnterListener: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  addButtonListener: () => void;
}
