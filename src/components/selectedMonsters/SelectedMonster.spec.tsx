// libraries
import "@testing-library/jest-dom";

// components
import renderWithProviders from "@/utils/test-utils";
import SelectedMonsters from "./SelectedMonsters";

// utils
import initialState from "@/redux/monsters/initialState";
import { monsters } from "@/utils/mockData";
import { RootState } from "@/redux/store";

const stateWithMonsterList: RootState = {
  monsters: {
    ...initialState,
    list: monsters,
    playerMonsterId: monsters[0].id,
    computerMonsterId: monsters[1].id,
    status: "succeeded",
  },
};

describe("<SelectedMonster />", () => {
  test("Initial disabled Start battle button", () => {
    const selectedMonsterComponent = renderWithProviders(<SelectedMonsters />);
    const button = selectedMonsterComponent.getByText("Start Battle");
    expect(button).toBeDisabled();
  });

  test("Enable button when there are selected monster", () => {
    const ExtendedRenderOptions = { preloadedState: stateWithMonsterList };
    const selectedMonsterComponent = renderWithProviders(
      <SelectedMonsters />,
      ExtendedRenderOptions
    );
    const button = selectedMonsterComponent.getByText("Start Battle");
    expect(button).not.toBeDisabled();
  });
});
