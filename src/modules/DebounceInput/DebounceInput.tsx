import { useState } from "react";
import { useDebounce } from "../../hooks";

const TIMEOUT = 2000;

export const DebounceInput = () => {
  const [inputState, setInputState] = useState<string>("");
  const onChange = (event: { target: { value: any } }) => {
    console.log(event.target.value);
    setInputState(event.target.value);
  };
  const debaunceChange = useDebounce(onChange, TIMEOUT);

  return (
    <>
      <input onChange={debaunceChange} />
      <h1>{inputState}</h1>
    </>
  );
};
