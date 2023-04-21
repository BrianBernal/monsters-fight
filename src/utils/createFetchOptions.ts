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

export { createFetchOptions };
