import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/UserSlice";
import bucketsReducer from "./features/BucketsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      buckets: bucketsReducer,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
