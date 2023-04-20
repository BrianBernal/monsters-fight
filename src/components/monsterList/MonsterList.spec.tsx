// libraries
import "@testing-library/jest-dom";
import { screen, waitFor } from "@testing-library/react";
import renderWithProviders from "@/utils/test-utils";

// components
import MonsterList from "./MonsterList";
import { fetchMocker } from "@/utils/setupVitest";
import initialState from "@/redux/monsters/initialState";
import { monsters } from "@/utils/mockData";
import { RootState } from "@/redux/store";

const stateWithMonsterList: RootState = {
  monsters: { ...initialState, list: monsters, status: "succeeded" },
};

describe("<MonsterList /> happy paths", () => {
  test("Render list with preloaded initial data", () => {
    const ExtendedRenderOptions = { preloadedState: stateWithMonsterList };
    const listComponent = renderWithProviders(
      <MonsterList />,
      ExtendedRenderOptions
    );
    monsters.forEach((monster) => {
      expect(listComponent.getByAltText(monster.name)).toBeInTheDocument();
    });
  });

  test("Render list with mocked fetch data", async () => {
    fetchMocker.doMock();
    const monsterComponent = renderWithProviders(<MonsterList />);
    expect(monsterComponent.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() =>
      expect(monsterComponent.queryAllByRole("img").length).toBeGreaterThan(0)
    );
    fetchMocker.dontMock();
  });
});

describe("<MonsterList /> UNhappy paths", () => {
  test("Show error message when not successful response", async () => {
    // TODO: if at the beginning list is empty, why gets Loading element without await?
    // expect(monsterComponent.getByText("Loading...")).toBeInTheDocument();
    renderWithProviders(<MonsterList />);
    await waitFor(() => {
      expect(screen.getByText("Monsters not found!"));
    });
  });
});
