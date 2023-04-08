// libraries
import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import renderWithProviders from "@/utils/test-utils";

// components
import Home from "./Home";
// import { fetchMocker } from "@/utils/setupVitest";

describe("<Home />", () => {
  test("Render initial screen with unselected monsters", () => {
    renderWithProviders(<Home />);
    expect(screen.getByText("Battle of Monsters")).toBeInTheDocument();
    expect(screen.getByText("Select your monster")).toBeInTheDocument();
    expect(screen.getByText("Player")).toBeInTheDocument();
    expect(screen.getByText("Computer")).toBeInTheDocument();
    expect(screen.getByText("Start Battle")).toBeInTheDocument();
  });

  test("Initial disable button", () => {
    const homeComponent = renderWithProviders(<Home />);
    const button = homeComponent.getByText("Start Battle");
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(homeComponent.getByText("Player")).toBeInTheDocument();
  });

  test("Enable Battle button after select monster", () => {
    // const homeComponent = renderWithProviders(<Home />);
  });
});
