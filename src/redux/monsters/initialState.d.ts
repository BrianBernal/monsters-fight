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

type initialState = {
  list: monster[];
  playerMonsterId: string;
  computerMonsterId: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: initialState = {
  list: [],
  playerMonsterId: "",
  computerMonsterId: "",
  status: "idle",
  error: null,
};

export default initialState;

export type { TMonster };
