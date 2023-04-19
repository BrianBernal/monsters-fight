// libraries
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// types
import type { RootState, AppDispatch } from "./store";

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };

// https://redux.js.org/tutorials/typescript-quick-start#define-typed-hooks
