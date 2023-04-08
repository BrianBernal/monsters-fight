// libraries
import "@testing-library/jest-dom";
import { waitFor } from "@testing-library/react";
import renderWithProviders from "@/utils/test-utils";

// components
import MonsterList from "./MonsterList";
import { fetchMocker } from "@/utils/setupVitest";
import initialState from "@/redux/monsters/initialState.d";
import { monsters } from "@/utils/mockData";
import { RootState } from "@/redux/store";

const stateWithMonsterList: RootState = {
  monsters: { ...initialState, list: monsters, status: "succeeded" },
};

describe("<MonsterList /> happy paths", () => {
  test("Render list with preloaded initial data", async () => {
    const ExtendedRenderOptions = { preloadedState: stateWithMonsterList };
    const listComponent = renderWithProviders(
      <MonsterList />,
      ExtendedRenderOptions
    );
    await waitFor(() =>
      expect(
        listComponent.getAllByAltText("React logo").length
      ).toBeGreaterThan(0)
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
