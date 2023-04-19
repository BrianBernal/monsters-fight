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

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];

export default setupStore;
export type { RootState, AppStore, AppDispatch };
