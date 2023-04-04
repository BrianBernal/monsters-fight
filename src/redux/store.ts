import { configureStore } from "@reduxjs/toolkit";
import monsterSlice from "./monsters/monstersSlice";

const store = configureStore({
  reducer: {
    monsters: monsterSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
