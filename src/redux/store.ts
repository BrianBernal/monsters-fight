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

function setupStore(preloadedState?: PreloadedState<TRootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

type TRootState = ReturnType<typeof rootReducer>;
type TAppStore = ReturnType<typeof setupStore>;
type TAppDispatch = TAppStore["dispatch"];

export default setupStore;
export type { TRootState, TAppStore, TAppDispatch };
