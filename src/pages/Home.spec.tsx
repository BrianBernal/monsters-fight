// libraries
import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "@/redux/store";

import Home from "./Home";

describe("<Home />", () => {
  test("Render title and subtitle", () => {
    const appComponent = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    appComponent.getByText("Battle of Monsters");
    appComponent.getByText("Select your monster");
  });
});
