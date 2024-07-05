import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  completed: 0,
  unCompleted: 0,
  SelectedTodo: null,
};

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: () => {},
    removeTodo: () => {},
    changeStatusTodo: () => {},
    setSelectedTodo: (state, { payload }) => {
      state.SelectedTodo = payload
    },
    calculateTotal: () => {},
  },
});

export const { addTodo, removeTodo, changeStatusTodo,setSelectedTodo, calculateTotal } =
  todosSlice.actions;

export default todosSlice.reducer;
