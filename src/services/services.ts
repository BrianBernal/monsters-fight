// models
import { TBattleResult, TMonster } from "../redux/monsters/models";

// utils
import {
  SERVICE_URL,
  createFetchOptions,
  fetchJsonBackend,
} from "@/services/httpUtils";

function fetchMonsters(): Promise<TMonster[]> {
  return fetchJsonBackend(SERVICE_URL.getMonsters);
}

function fetchBattle(body: object): Promise<TBattleResult> {
  const fetchOptions = createFetchOptions("POST", body);
  return fetchJsonBackend(SERVICE_URL.getBattleResult, fetchOptions);
}

export { fetchMonsters, fetchBattle };
