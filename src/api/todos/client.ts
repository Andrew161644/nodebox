import { Todo } from "../../types";

const todoApi = "https://jsonplaceholder.typicode.com/todos";

export const loadTodos = () => {
  return fetch(`${todoApi}`).then(async (response) => {
    return (await response.json()) as Todo[];
  });
};
