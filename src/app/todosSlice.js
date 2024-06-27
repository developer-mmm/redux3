import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  completed: 0,
  unCompleted: 0,
};

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: () => {},
    removeTodo: () => {},
    changeStatusTodo: () => {},
    calculateTotal: () => {},
  },
});

export const { addTodo, removeTodo, changeStatusTodo, calculateTotal } =
  todosSlice.actions;

  export default todosSlice.reducer
