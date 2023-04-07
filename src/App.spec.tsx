// libraries
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

const textTitle = "Battle of Monsters";

describe("<App />", () => {
  test("Approaches of rendering", () => {
    const component = render(<App />);
    // Approach 1: Simplest approach
    component.getByText(textTitle); // * Fails if element is not found
    // Approach 2: jest-dom library
    expect(component.container).toHaveTextContent(textTitle); // jest-dom library
    // using screen
    expect(screen.getByText(textTitle)).toBeInTheDocument(); // jest-dom library
  });
  test("My favorite approach for now", () => {
    const appComponent = render(<App />);
    appComponent.getByText(textTitle);
    appComponent.getByText("Select your monster");
  });
});
