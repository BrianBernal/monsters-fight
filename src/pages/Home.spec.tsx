// libraries
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

// components
import Home from "./Home";
import renderWithProviders from "@/utils/test-utils";

describe("<Home />", () => {
  test("Render title and subtitle", () => {
    renderWithProviders(<Home />);
    expect(screen.getByText("Battle of Monsters")).toBeInTheDocument();
    expect(screen.getByText("Select your monster")).toBeInTheDocument();
  });
});
