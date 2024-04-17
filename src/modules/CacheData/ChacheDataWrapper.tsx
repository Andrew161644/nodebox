import { FC, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
  todoSelector,
  todoLoadingSelector,
  loadAll,
  setTodosDefaultState,
} from "../../store";
import { LargeDataProps } from "./types";
import { useChached } from "../../hooks";

const Component: FC<LargeDataProps> = ({ data, loading }) => {
  return <>{loading ? "loading...." : data}</>;
};

export const ChacheDataWrapper = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(todoSelector);
  const loading = useAppSelector(todoLoadingSelector);
  const [showPageWithData, setShosPageWithData] = useState<boolean>(false);

  const loadData = () => {
    dispatch(loadAll());
  };
  const cleanUp = () => dispatch(setTodosDefaultState());

  useChached(loadData, cleanUp, showPageWithData, !!todos.length, 4000);

  return (
    <>
      <button
        onClick={() => {
          setShosPageWithData(!showPageWithData);
        }}
      >
        NextPage
      </button>
      {showPageWithData ? (
        <Component data={JSON.stringify(todos)} loading={loading} />
      ) : (
        <div>Another page</div>
      )}
    </>
  );
};
