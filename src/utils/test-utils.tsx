// libraries
import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";

// As a basic setup, import your same slice reducers
import setupStore, { TRootState, TAppStore } from "@/redux/store";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<TRootState>;
  store?: TAppStore;
}

function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper<T>({ children }: PropsWithChildren<T>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithProviders;
