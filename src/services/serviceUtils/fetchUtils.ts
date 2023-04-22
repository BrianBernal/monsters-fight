// REQUEST UTILS
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

type TResponseAPIStructure<T> = {
  ok: boolean;
  data: T;
  message?: string;
  error?: string;
};

// RESPONSE UTILS
function manageBackendResponseData<T>(res: TResponseAPIStructure<T>) {
  if (!res.ok) {
    throw new Error(res.message || res.error || "Connection error");
  }
  return res.data;
}

function fetchResponseToJson(res: Response) {
  return res.json();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchCatchThrowError = (err: any) => {
  throw Error(err);
};

export {
  // REQUEST UTILS
  createFetchOptions,

  // RESPONSE UTILS
  fetchCatchThrowError,
  fetchResponseToJson,
  manageBackendResponseData,
};
