// models
import { TBattleResult, TMonster } from "../redux/monsters/models";

// utils
import { ENDPOINTS } from "@/services/serviceUtils/httpUtils";
import {
  createFetchOptions,
  fetchCatchThrowError,
  fetchResponseToJson,
  manageBackendResponseData,
} from "./serviceUtils/fetchUtils";

function fetchMonsters(): Promise<Array<TMonster>> {
  return fetch(ENDPOINTS.getMonsters)
    .then(fetchResponseToJson)
    .then(manageBackendResponseData<TMonster[]>)
    .catch(fetchCatchThrowError);
}

function fetchBattle(body: object): Promise<TBattleResult> {
  const fetchOptions = createFetchOptions("POST", body);

  return fetch(ENDPOINTS.getBattleResult, fetchOptions)
    .then(fetchResponseToJson)
    .then(manageBackendResponseData<TBattleResult>)
    .catch(fetchCatchThrowError);
}

export { fetchMonsters, fetchBattle };
