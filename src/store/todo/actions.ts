import { getAllTodos, getTodos } from "../../api/todos";
import { TodoId } from "../../types";
import { AppDispatch } from "../store";
import { todoSlice } from "./todoSlice";

export const loadTodos =
  (cnt: number, page: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(todoSlice.actions.replaceLoading(true));
      const todos = await getTodos(cnt, page);
      dispatch(todoSlice.actions.replaceTodos(todos));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(todoSlice.actions.replaceLoading(false));
    }
  };

export const loadNewTodos =
  (cnt: number, page: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(todoSlice.actions.replaceLoading(true));
      const todos = await getTodos(cnt, page);
      dispatch(todoSlice.actions.addNewTodos(todos));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(todoSlice.actions.replaceLoading(false));
    }
  };

export const loadAll = () => async (dispatch: AppDispatch) => {
  dispatch(todoSlice.actions.replaceLoading(true));

  try {
    const todos = await getAllTodos();
    dispatch(todoSlice.actions.replaceTodos(todos));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(todoSlice.actions.replaceLoading(false));
  }
};

export const setTodosDefaultState = () => (dispatch: AppDispatch) => {
  dispatch(todoSlice.actions.clearTodos());
};
