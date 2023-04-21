// libraries
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// utils
import { getRandomInt } from "@/utils/math";

// redux
import { RootState } from "../store";
import initialState from "./initialState";
import { TBattleResult } from "./models";
import { fetchBattle, fetchMonsters } from "../services";

const fetchMonstersAction = createAsyncThunk(
  "monsters/fetchMonsters",
  fetchMonsters
);

const fetchBattleAction = createAsyncThunk<
  TBattleResult,
  void,
  { state: RootState }
>("monsters/fetchBattle", (_, { getState }): Promise<TBattleResult> => {
  const {
    monsters: { playerMonsterId, computerMonsterId },
  } = getState();

  if (!playerMonsterId || !computerMonsterId) {
    throw new Error("Missing opponents IDs");
  }
  const body = {
    playerMonsterId,
    computerMonsterId,
  };

  return fetchBattle(body);
});

const monsterSlice = createSlice({
  name: "monsters",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPlayerMonsterId: (state, action: PayloadAction<string>) => {
      state.playerMonsterId = action.payload;
      const playerMonsterIndex = state.list.findIndex(
        (monster) => monster.id === action.payload
      );
      const randomIndex = getRandomInt(state.list.length, [playerMonsterIndex]);
      state.computerMonsterId = state.list[randomIndex].id;
      state.fightResult = initialState.fightResult;
    },
  },
  extraReducers(builder) {
    builder
      // Monsters List
      .addCase(fetchMonstersAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMonstersAction.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(fetchMonstersAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      })
      // Monsters Battle
      .addCase(fetchBattleAction.pending, (state) => {
        state.fightResult.status = "loading";
      })
      .addCase(fetchBattleAction.fulfilled, (state, action) => {
        state.fightResult.status = "succeeded";
        state.fightResult.detail = action.payload;
        state.fightResult.error = null;
      })
      .addCase(fetchBattleAction.rejected, (state, action) => {
        state.fightResult.status = "failed";
        state.fightResult.error = action.error.message || "Unknown error";
      });
  },
});

// selectors:
// Other code such as selectors can use the imported `RootState` type
const selectedPlayerMonsterId = ({ monsters }: RootState) => {
  return monsters.list.find(
    (monster) => monster.id === monsters.playerMonsterId
  );
};
const selectedComputerMonsterId = ({ monsters }: RootState) => {
  return monsters.list.find(
    (monster) => monster.id === monsters.computerMonsterId
  );
};

const monsterWinner = ({ monsters }: RootState) => {
  const winner = monsters.list.find((monster) => {
    return monster.id === monsters.fightResult.detail?.winner.id;
  });

  return winner;
};

export default monsterSlice.reducer;

export const { setPlayerMonsterId } = monsterSlice.actions;
export { fetchMonstersAction, fetchBattleAction }; // async actions
export { selectedPlayerMonsterId, selectedComputerMonsterId, monsterWinner }; // selectors
