// libraries
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import renderWithProviders from "@/utils/test-utils";

// components
import Home from "./Home";

describe("<Home />", () => {
  test("Render initial screen with unselected monsters", () => {
    renderWithProviders(<Home />);
    expect(screen.getByText("Battle of Monsters")).toBeInTheDocument();
    expect(screen.getByText("Select your monster")).toBeInTheDocument();
  });
});
