// libraries
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// redux
import { RootState } from "../store";
import initialState from "./initialState.d";

const monsterSlice = createSlice({
  name: "monsters",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPlayerMonsterId: (state, action: PayloadAction<string>) => {
      state.playerMonsterId = action.payload;
    },
    setComputerMonsterId: (state, action: PayloadAction<string>) => {
      state.computerMonsterId = action.payload;
    },
  },
});

export default monsterSlice.reducer;
export { monsterSlice };
export const { setComputerMonsterId, setPlayerMonsterId } =
  monsterSlice.actions;

// selectors:
// Other code such as selectors can use the imported `RootState` type
export const selectedPlayerMonsterId = ({ monsters }: RootState) => {
  return monsters.list.find(
    (monster) => monster.id === monsters.playerMonsterId
  );
};
export const selectedComputerMonsterId = ({ monsters }: RootState) => {
  return monsters.list.find(
    (monster) => monster.id === monsters.computerMonsterId
  );
};
