import { loadTodos } from "./client";

export const getTodos = async (cnt: number, page: number) => {
  const todos = await loadTodos();
  const len = todos.length;
  const pageCnt = Math.ceil(len / cnt);
  if (pageCnt < page) {
    return [];
  }
  return todos.slice((page - 1) * cnt, page * cnt);
};

export const getAllTodos = async () => {
  const todos = await loadTodos();
  return todos;
};
