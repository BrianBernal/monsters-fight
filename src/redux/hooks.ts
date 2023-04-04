// libraries
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// types
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };

// https://redux.js.org/tutorials/typescript-quick-start#define-typed-hooks
