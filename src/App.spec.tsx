// libraries
import { render } from "@testing-library/react";

import App from "./App";

describe("<App />", () => {
  test("Render root App", () => {
    render(<App />);
  });
});
