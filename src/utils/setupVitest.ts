import createFetchMock from "vitest-fetch-mock";
import { vi } from "vitest";
import { monsters } from "./mockData";

const fetchMocker = createFetchMock(vi);

const endpoints = {
  getMonsters: "/getMonsters",
  getWinner: "/getWinner",
};

const responses = {
  [endpoints.getMonsters]: JSON.stringify({ ok: true, data: monsters }),
  [endpoints.getWinner]: JSON.stringify({
    ok: true,
    data: {
      winnerId: monsters[0].id,
      looserId: monsters[1].id,
    },
  }),
};

fetchMocker.mockIf("http://localhost:4000", (req) => {
  console.log("mock fetched", req.url);

  if (req.url.endsWith(endpoints.getMonsters)) {
    return responses[endpoints.getMonsters];
  } else if (req.url.endsWith(endpoints.getWinner)) {
    return responses[endpoints.getWinner];
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
