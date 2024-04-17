import { ReactNode } from "react";
import { ChacheDataWrapper } from "./CacheData";
import { DebounceInput } from "./DebounceInput";
import { ReducerComponent } from "./ReducerComponent";
import { VirtualTodoList } from "./VirtualScroll/TodoList";
import { ComponentLifeCyclesWrapper } from "./LifeCycle";

export type ModulesInApp =
  | "ChacheData"
  | "ComponentsLifeCycle"
  | "DebounceInput"
  | "ReducerComponent"
  | "VirtualScroll";

export const modulesConfig: Record<ModulesInApp, ReactNode> = {
  ChacheData: <ChacheDataWrapper />,
  ComponentsLifeCycle: <ComponentLifeCyclesWrapper />,
  DebounceInput: <DebounceInput />,
  ReducerComponent: <ReducerComponent />,
  VirtualScroll: <VirtualTodoList />,
};
