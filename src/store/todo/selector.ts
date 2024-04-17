import { RootState } from "../store";
import { todoAdapter } from "./todoAdapter";
import { createSelector } from "@reduxjs/toolkit";

const todoStateSelector = (state: RootState) => {
  return state.todos;
};

const selectAllTodos = todoAdapter.getSelectors().selectAll;
export const todoSelector = createSelector([todoStateSelector], (todoState) => {
  return selectAllTodos(todoState.todos);
});

export const todoLoadingSelector = createSelector(
  [todoStateSelector],
  (todoState) => {
    return todoState.loading;
  },
);
