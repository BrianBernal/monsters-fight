// libraries
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// types
import type { TRootState, TAppDispatch } from "./store";

const useAppDispatch: () => TAppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export { useAppDispatch, useAppSelector };

// https://redux.js.org/tutorials/typescript-quick-start#define-typed-hooks
