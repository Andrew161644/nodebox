import { useReducer } from "react";
import { State, Todo } from "./types";

const createInitialState = (userName: string): State => {
  const initialTodos: Todo[] = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: userName + "'s task #" + (i + 1),
    });
  }
  return {
    filter: "",
    todos: initialTodos,
  };
};

function reducer(state: State, action: any): State {
  switch (action.type) {
    case "changed_draft": {
      return {
        filter: action.nextDraft,
        todos: state.todos,
      };
    }
    case "added_todo": {
      return {
        filter: "",
        todos: [
          {
            id: state.todos.length,
            text: state.filter,
          },
          ...state.todos,
        ],
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

export const ReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, "Andrew", createInitialState);
  return (
    <>
      <input
        value={state.filter}
        onChange={(e) => {
          dispatch({
            type: "changed_draft",
            nextDraft: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "added_todo" });
        }}
      >
        Add
      </button>
      <ul>
        {state.todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};
