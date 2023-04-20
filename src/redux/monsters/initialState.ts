import { TInitialState } from "./models";

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
  },
};

export default initialState;
