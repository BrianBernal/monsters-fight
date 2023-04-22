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

type TRequestStatus = "idle" | "loading" | "succeeded" | "failed";

type TBattleResult = { winner: TMonster; tie: boolean };

type TInitialState = {
  status: TRequestStatus;
  error: string | null;
  list: TMonster[];
  playerMonsterId: string;
  computerMonsterId: string;
  fightResult: {
    status: TRequestStatus;
    error: string | null;
    detail: TBattleResult | null;
  };
};

export type { TMonster, TBattleResult, TInitialState };
