import { useEffect, useRef, useState } from "react";
import "./styles.css";
import {
  loadNewTodos,
  todoLoadingSelector,
  todoSelector,
  useAppDispatch,
  useAppSelector,
} from "../../store";

const LIST_ITEMS_CNT = 40;
const ROWS_CNT_TO_START_LOAD = 5;

export const VirtualTodoList = () => {
  const page = useRef<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [progressBar, setProgressBar] = useState<number>(0);
  const scrolledElements = useRef<Set<string>>(new Set());

  const dispatch = useAppDispatch();
  const todos = useAppSelector(todoSelector);
  const todosLoading = useAppSelector(todoLoadingSelector);

  useEffect(() => {
    dispatch(loadNewTodos(LIST_ITEMS_CNT, 2));
  }, []);

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const clientHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;

    if (ref.current && ref.current?.id) {
      const rowHeight = ref.current?.clientHeight;
      const heightToBottom = Math.round(
        scrollHeight -
          scrollTop -
          clientHeight -
          rowHeight * ROWS_CNT_TO_START_LOAD,
      );

      if (heightToBottom <= 0 && !todosLoading) {
        const scrolledSet = scrolledElements.current;
        const scrolledToId = ref.current?.id || "";
        page.current++;
        if (!scrolledSet.has(scrolledToId)) {
          dispatch(loadNewTodos(LIST_ITEMS_CNT, page.current));
          scrolledSet.add(scrolledToId);
        }
      }
    }

    const scrolledToPrgress = ((scrollTop + clientHeight) / scrollHeight) * 100;
    setProgressBar(Math.round(scrolledToPrgress));
  };

  return (
    <div>
      <div className={"list"} onScroll={onScroll}>
        {todos.map((t, index) => {
          return (
            <div key={t.id} id={`${index}`} className={"listItem"} ref={ref}>
              {index}-{t.title}
            </div>
          );
        })}
      </div>
      <div>{progressBar}%</div>
    </div>
  );
};
