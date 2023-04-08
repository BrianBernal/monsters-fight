import createFetchMock from "vitest-fetch-mock";
import { vi } from "vitest";

const fetchMocker = createFetchMock(vi);
const monsters = [
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
  {
    id: "id2",
    name: "Monster 2",
    attack: 30,
    defense: 10,
    hp: 100,
    speed: 30,
    type: "Type2",
    imageUrl: "url",
  },
];

fetchMocker.mockIf("http://localhost:4000/getMonsters", (req) => {
  console.log("mock fetched");
  if (req.url.endsWith("/getMonsters")) {
    return JSON.stringify({ data: monsters, ok: true });
  } else {
    return {
      status: 404,
      body: "Not Found",
    };
  }
});

fetchMocker.enableMocks();
fetchMocker.dontMock();

export { fetchMocker };
