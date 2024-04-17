import { useCallback, useRef } from "react";

type timerType = ReturnType<typeof setTimeout>;
export const useDebounce = <T>(func: (arg: T) => void, delay: number) => {
  const ref = useRef<timerType>();
  return useCallback((args: T) => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => func(args), delay);
  }, []);
};
