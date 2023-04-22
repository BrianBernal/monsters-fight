// models
import { TBattleResult, TMonster } from "../redux/monsters/models";

// utils
import {
  ENDPOINTS,
  createFetchOptions,
  customFetch,
} from "@/services/httpUtils";

function fetchMonsters(): Promise<TMonster[]> {
  return customFetch(ENDPOINTS.getMonsters);
}

function fetchBattle(body: object): Promise<TBattleResult> {
  const fetchOptions = createFetchOptions("POST", body);
  return customFetch(ENDPOINTS.getBattleResult, fetchOptions);
}

export { fetchMonsters, fetchBattle };
