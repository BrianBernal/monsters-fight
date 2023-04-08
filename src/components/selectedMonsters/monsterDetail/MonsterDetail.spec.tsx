// libraries
import "@testing-library/jest-dom";

// components
import MonsterDetail from "./MonsterDetail";

// utils
import renderWithProviders from "@/utils/test-utils";
import { render, waitFor } from "@testing-library/react";
import { monsters } from "@/utils/mockData";

describe("<MonsterDetail />", () => {
  test("Renders empty message correctly", () => {
    const { getByText } = renderWithProviders(
      <MonsterDetail emptyMessage="Empty" monster={undefined} />
    );
    expect(getByText("Empty")).toBeInTheDocument();
  });

  test("Renders monsters powers", () => {
    const [monster] = monsters;
    const { queryByText, getByText } = render(
      <MonsterDetail emptyMessage="Empty 2" monster={monster} />
    );
    expect(queryByText("Empty 2")).toBeNull();
    const { name, hp, attack, defense, speed } = monster;
    const elementsToShow = {
      name, // title
      hp, // indicators
      attack,
      defense,
      speed,
    };
    Object.keys(elementsToShow).forEach(async (el) => {
      await waitFor(() => {
        expect(getByText(el)).toBeInTheDocument();
      });
    });
  });
});
