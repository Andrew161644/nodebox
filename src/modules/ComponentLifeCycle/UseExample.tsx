import { useState } from "react";
import { SomeComponentShouldUpdate } from "./ComponentLifeCycles";

export const ComponentLifeCyclesWrapper = () => {
  const [btnClicked, setBtnClicked] = useState<number>(0);

  const onClickTimeout = () => {
    console.log("click");
    setTimeout(() => {
      setBtnClicked((prev) => prev + 1);
    }, 2000);
  };

  return (
    <div className="App">
      <h2>{btnClicked}</h2>
      <button onClick={onClickTimeout}>Label</button>
      <SomeComponentShouldUpdate input={btnClicked} />
    </div>
  );
};
