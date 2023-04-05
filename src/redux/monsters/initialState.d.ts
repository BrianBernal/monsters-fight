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

type initialState = {
  status: requestStatus;
  error: string | null;
  list: TMonster[];
  playerMonsterId: string;
  computerMonsterId: string;
  fightResult: {
    status: requestStatus;
    error: string | null;
    winnerId: string;
    looserId: string;
  };
};

const initialState: initialState = {
  list: [],
  playerMonsterId: "",
  computerMonsterId: "",
  status: "idle",
  error: null,
  fightResult: {
    status: "idle",
    error: null,
    winnerId: "",
    looserId: "",
  },
};

export default initialState;

export type { TMonster };
export { requestStatus };
