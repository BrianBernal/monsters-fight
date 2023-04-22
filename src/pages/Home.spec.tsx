// libraries
import "@testing-library/jest-dom";
import { fireEvent, screen, waitFor } from "@testing-library/react";

// components
import renderWithProviders from "@/utils/test-utils";
import Home from "./Home";

// utils
import { fetchMocker } from "@/utils/setupVitest";
import { TRootState } from "@/redux/store";
import initialState from "@/redux/monsters/initialState";
import { monsters } from "@/utils/mockData";

const stateLoadedMonsters: TRootState = {
  monsters: {
    ...initialState,
    list: monsters,
    status: "succeeded",
  },
};

const stateSelectedMonster: TRootState = {
  monsters: {
    ...initialState,
    list: monsters,
    playerMonsterId: monsters[0].id,
    computerMonsterId: monsters[1].id,
    status: "succeeded",
  },
};

describe("<Home /> : MULTIPLE COMPONENTS IN THESE TESTS", () => {
  test("Renders correctly", () => {
    renderWithProviders(<Home />);
    expect(screen.getByText("Battle of Monsters")).toBeInTheDocument();

    // Following elements are instanced in <SelectedMonsters />
    // through <MonsterDetail emptyMessage="..." .../>
    expect(screen.getByText("Player")).toBeInTheDocument();
    expect(screen.getByText("Computer")).toBeInTheDocument();
  });

  test("Show monster twice: in the list and in the detail card", async () => {
    fetchMocker.doMock();
    const extendedRenderOptions = { preloadedState: stateLoadedMonsters };
    const { getByText, getAllByText } = renderWithProviders(
      <Home />,
      extendedRenderOptions
    );
    const monsterCard = getByText(monsters[0].name);
    fireEvent.click(monsterCard);
    await waitFor(() => {
      expect(getAllByText(monsters[0].name).length).toBeGreaterThan(1);
      expect(getAllByText(monsters[1].name).length).toBeGreaterThan(1);
    });
    fetchMocker.dontMock();
  });

  test("Shows the result of Start Battle event", async () => {
    fetchMocker.doMock();
    const extendedRenderOptions = { preloadedState: stateSelectedMonster };
    const { getByText } = renderWithProviders(<Home />, extendedRenderOptions);
    const button = getByText("Start Battle"); // Defined at SelectedMOnsters.tsx
    expect(button).not.toBeDisabled();
    fireEvent.click(button);
    await waitFor(() => {
      expect(getByText(/(\w*) Wins!/)).toBeInTheDocument(); // Defined at ResultSection.tsx
    });
    fetchMocker.dontMock();
  });
});
