type TMonster = {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
};

type requestStatus = "idle" | "loading" | "succeeded" | "failed";

type TBattleResult = { winner: TMonster; tie: boolean };

type TInitialState = {
  status: requestStatus;
  error: string | null;
  list: TMonster[];
  playerMonsterId: string;
  computerMonsterId: string;
  fightResult: {
    status: requestStatus;
    error: string | null;
    detail: TBattleResult | null;
  };
};

const initialState: TInitialState = {
  list: [],
  playerMonsterId: "",
  computerMonsterId: "",
  status: "idle",
  error: null,
  fightResult: {
    status: "idle",
    error: null,
    detail: null,
    looserId: "",
  },
};

export default initialState;

export type { TMonster, TBattleResult };
export { requestStatus };
