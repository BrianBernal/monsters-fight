// libraries
import {
  PreloadedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

// slices
import monsterSlice from "./monsters/monstersSlice";

const rootReducer = combineReducers({
  monsters: monsterSlice,
});

function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export default setupStore;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
