import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToDoType } from "../page/Main";

const initialState: {
  toDos: ToDoType[];
} = {
  toDos: [],
};

const toDoSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDo(state, action: PayloadAction<string>) {
      const newToDo: ToDoType = { id: Date.now(), todo: action.payload };
      state.toDos.push(newToDo);
    },
    removeToDo(state, action: PayloadAction<number>) {
      state.toDos = state.toDos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addToDo, removeToDo } = toDoSlice.actions;

const todoReducer = toDoSlice.reducer;
export default todoReducer;
