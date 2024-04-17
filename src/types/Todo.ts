export type TodoId = number;

export type Todo = {
  userId: string;
  id: TodoId;
  title: string;
  completed: boolean;
};
