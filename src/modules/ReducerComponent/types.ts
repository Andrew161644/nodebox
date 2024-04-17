export type Todo = {
  id: number;
  text: string;
};

export type State = {
  filter: string;
  todos: Todo[];
};
