// models
import { TBattleResult, TMonster } from "../redux/monsters/models";

// utils
import {
  ENDPOINTS,
  createFetchOptions,
  fetchJsonBackend,
} from "@/services/httpUtils";

function fetchMonsters(): Promise<TMonster[]> {
  return fetchJsonBackend(ENDPOINTS.getMonsters);
}

function fetchBattle(body: object): Promise<TBattleResult> {
  const fetchOptions = createFetchOptions("POST", body);
  return fetchJsonBackend(ENDPOINTS.getBattleResult, fetchOptions);
}

export { fetchMonsters, fetchBattle };
