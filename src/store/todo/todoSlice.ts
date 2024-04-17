import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { TodoState } from "./types";
import { Todo } from "../../types";
import { todoAdapter } from "./todoAdapter";

const addNewTodos = (state: TodoState, action: PayloadAction<Todo[]>) => {
  todoAdapter.addMany(state.todos, action.payload);
};

const replaceTodos = (state: TodoState, action: PayloadAction<Todo[]>) => {
  todoAdapter.setAll(state.todos, action.payload);
};

const replaceLoading = (state: TodoState, action: PayloadAction<boolean>) => {
  state.loading = action.payload;
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    replaceLoading,
    replaceTodos,
    addNewTodos,
    clearTodos: () => initialState,
  },
});

export const todoReducer = todoSlice.reducer;
