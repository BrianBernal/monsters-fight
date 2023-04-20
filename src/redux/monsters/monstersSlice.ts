// libraries
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// utils
import { getRandomInt } from "@/utils/math";

// redux
import { RootState } from "../store";
import initialState from "./initialState";
import { TBattleResult, TMonster } from "./models";

const fetchMonsters = createAsyncThunk(
  "monsters/fetchMonsters",
  async (): Promise<Array<TMonster>> => {
    try {
      const response = await fetch("http://localhost:4000/getMonsters");
      const dataResponse = await response.json();
      if (!response.ok) {
        throw new Error(
          dataResponse.message || response.statusText || "Connection error"
        );
      }
      return dataResponse.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }
);

const fetchBattle = createAsyncThunk<TBattleResult, void, { state: RootState }>(
  "monsters/fetchBattle",
  async (_, { getState }): Promise<TBattleResult> => {
    try {
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
      const fetchOptions = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        "http://localhost:4000/getWinner",
        fetchOptions
      );
      const dataResponse = await response.json();
      if (!response.ok) {
        throw new Error(
          dataResponse.message || response.statusText || "Connection error"
        );
      }
      return dataResponse.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }
);

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
      .addCase(fetchMonsters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMonsters.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(fetchMonsters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      })
      // Monsters Battle
      .addCase(fetchBattle.pending, (state) => {
        state.fightResult.status = "loading";
      })
      .addCase(fetchBattle.fulfilled, (state, action) => {
        state.fightResult.status = "succeeded";
        state.fightResult.detail = action.payload;
        state.fightResult.error = null;
      })
      .addCase(fetchBattle.rejected, (state, action) => {
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
export { fetchMonsters, fetchBattle }; // async actions
export { selectedPlayerMonsterId, selectedComputerMonsterId, monsterWinner }; // selectors
