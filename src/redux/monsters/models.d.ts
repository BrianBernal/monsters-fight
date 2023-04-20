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

export type { TMonster, TBattleResult, requestStatus, TInitialState };
