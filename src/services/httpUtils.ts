const BACKEND_HOSTNAME = "http://localhost:4000";

const SERVICE_URL = Object.freeze({
  getMonsters: `${BACKEND_HOSTNAME}/monsters`,
  getBattleResult: `${BACKEND_HOSTNAME}/battle`,
});

type TMmethod = "POST" | "PATCH";
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

function fetchJsonBackend(url: string, requestInit?: RequestInit) {
  return fetch(url, requestInit)
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

export { SERVICE_URL, createFetchOptions, fetchJsonBackend };
