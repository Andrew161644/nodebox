import React, { FC, useEffect, memo } from "react";

export const SomeComponent: FC<{ input: number }> = ({ input }) => {
  console.log("componentWillMount");
  useEffect(() => {
    console.log("Component did mount");

    return () => {
      console.log("Component Will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Component did update " + input);
  }, [input]);

  return <div>SomeComponent</div>;
};

export const SomeComponentShouldUpdate = memo(
  SomeComponent,
  (prevProps, nextProps) => {
    if (nextProps.input % 2 == 0 && nextProps.input != prevProps.input) {
      console.log("ShouldComponentUpdate");
      return false;
    }
    console.log("Should Not ComponentUpdate");
    return true;
  },
);
