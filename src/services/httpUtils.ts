const BACKEND_HOSTNAME = "http://localhost:4000";

const ENDPOINTS = Object.freeze({
  getMonsters: `${BACKEND_HOSTNAME}/getMonsters`,
  getBattleResult: `${BACKEND_HOSTNAME}/getWinner`,
});

type TMmethod = "POST" | "DELETE" | "OPTIONS";
function createFetchOptions(method: TMmethod, body = {}, headers = {}) {
  const fetchOptions = {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };
  return fetchOptions;
}

function customFetch(endpoint: string, requestInit?: RequestInit) {
  return fetch(endpoint, requestInit)
    .then((res) => res.json())
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.message || res.error || "Connection error");
      }
      return res.data;
    })
    .catch((err) => {
      throw Error(err);
    });
}

export { ENDPOINTS, createFetchOptions, customFetch };
