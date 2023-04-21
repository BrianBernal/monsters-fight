import { createFetchOptions } from "@/utils/createFetchOptions";
import { TBattleResult, TMonster } from "./monsters/models";

const URL = "http://localhost:4000";
const ENDPOINTS = {
  getMonsters: `${URL}/getMonsters`,
  getBattleResult: `${URL}/getWinner`,
};

type TResponseAPIStructure<T> = {
  ok: boolean;
  data: T;
  message?: string;
  error?: string;
};
function manageResponseData<T>(res: TResponseAPIStructure<T>) {
  if (!res.ok) {
    throw new Error(res.message || res.error || "Connection error");
  }
  return res.data;
}

function fetchMonsters(): Promise<Array<TMonster>> {
  return fetch(ENDPOINTS.getMonsters)
    .then((res) => res.json())
    .then(manageResponseData<TMonster[]>)
    .catch((err) => {
      throw Error(err);
    });
}

function fetchBattle(body: object): Promise<TBattleResult> {
  const fetchOptions = createFetchOptions("POST", body);

  return fetch(ENDPOINTS.getBattleResult, fetchOptions)
    .then((res) => res.json())
    .then(manageResponseData<TBattleResult>)
    .catch((err) => {
      throw Error(err);
    });
}

export { fetchMonsters, fetchBattle };
