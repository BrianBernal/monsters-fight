// libraries
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// redux
import { RootState } from "../store";
import initialState from "./initialState.d";
import { getRandomInt } from "@/utils/math";

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
export { selectedPlayerMonsterId, selectedComputerMonsterId };
