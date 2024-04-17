import { createEntityAdapter } from "@reduxjs/toolkit";
import { Todo } from "../../types";

export const todoAdapter = createEntityAdapter<Todo>();
