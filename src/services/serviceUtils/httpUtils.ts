const BACKEND_HOSTNAME = "http://localhost:4000";
const endpoints = {
  getMonsters: `${BACKEND_HOSTNAME}/getMonsters`,
  getBattleResult: `${BACKEND_HOSTNAME}/getWinner`,
};
const ENDPOINTS = Object.freeze(endpoints);

export { ENDPOINTS };
