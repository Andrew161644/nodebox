import { TodoState } from "./types";
import { todoAdapter } from "./todoAdapter";

export const initialState: TodoState = {
  todos: todoAdapter.getInitialState(),
  page: 1,
  cnt: 15,
  loading: false,
};
