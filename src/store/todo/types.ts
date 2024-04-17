import { EntityState } from "@reduxjs/toolkit";
import { Todo, TodoId } from "../../types";

export type TodoState = {
  todos: EntityState<Todo, TodoId>;
  page: number;
  cnt: number;
  loading: boolean;
};
