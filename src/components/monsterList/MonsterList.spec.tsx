// libraries
import "@testing-library/jest-dom";
import { waitFor } from "@testing-library/react";
import renderWithProviders from "@/utils/test-utils";

// components
import MonsterList from "./MonsterList";
import { fetchMocker } from "@/utils/setupVitest";
import initialState from "@/redux/monsters/initialState.d";

const stateWithMonsterList = { monsters: { ...initialState } };
stateWithMonsterList.monsters.list = [
  {
    id: "id1",
    name: "Monster 1",
    attack: 20,
    defense: 30,
    hp: 100,
    speed: 50,
    type: "Type1",
    imageUrl: "url",
  },
];
stateWithMonsterList.monsters.status = "succeeded";

describe("<MonsterList /> happy paths", () => {
  test("Render list with preloaded initial data", async () => {
    const listComponent = renderWithProviders(<MonsterList />, {
      preloadedState: stateWithMonsterList,
    });
    await waitFor(() =>
      expect(listComponent.getByAltText("React logo")).toBeInTheDocument()
    );
  });

  test("Render list with mocked fetch data", async () => {
    fetchMocker.doMock();
    const monsterComponent = renderWithProviders(<MonsterList />);
    expect(monsterComponent.getByText("Loading...")).toBeInTheDocument();
    // TODO: if at the beginning list is empty, why gets Loading element without await?
    await waitFor(() =>
      expect(monsterComponent.queryAllByRole("img").length).toBeGreaterThan(0)
    );
    fetchMocker.dontMock();
  });
});

describe("<MonsterList /> UNhappy paths", () => {
  test("Show error message when not successful response", async () => {
    const monsterComponent = renderWithProviders(<MonsterList />);
    // TODO: if at the beginning list is empty, why gets Loading element without await?
    expect(monsterComponent.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      expect(monsterComponent.queryAllByRole("img").length).toBe(0);
      expect(monsterComponent.getByText(/Not Found/));
    });
  });
});
