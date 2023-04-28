const BACKEND_HOSTNAME = import.meta.env.BACKEND_URL || "http://localhost:4000";

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
    .then((res) => {
      const dataRes = res.json();
      const successfulStatus = res.status < 200 && res.status > 299;
      const dataHasCorrectConvention = "ok" in dataRes && "data" in dataRes;

      if (successfulStatus && dataHasCorrectConvention) {
        return dataRes;
      }
      if (successfulStatus && !dataHasCorrectConvention) {
        return {
          ok: true,
          data: dataRes,
        };
      }
      return dataRes;
    })
    .then((res) => {
      if (!res.ok) {
        throw Error(res.error || res.message || "Connection error");
      }
      return res.data;
    })
    .catch((err) => {
      throw Error(err);
    });
}

export { SERVICE_URL, createFetchOptions, fetchJsonBackend };
