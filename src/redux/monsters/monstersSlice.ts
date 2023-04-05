// libraries
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// redux
import { RootState } from "../store";
import initialState, { TMonster } from "./initialState.d";
import { getRandomInt } from "@/utils/math";

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
      // await new Promise((resolve) => setTimeout(resolve, 2000));
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
      const randomIndex = getRandomInt(state.list.length);
      state.computerMonsterId = state.list[randomIndex].id;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMonsters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMonsters.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchMonsters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
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

export default monsterSlice.reducer;
export const { setPlayerMonsterId } = monsterSlice.actions;
export { fetchMonsters };
export { selectedPlayerMonsterId, selectedComputerMonsterId };
