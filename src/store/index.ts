import { configureStore } from "@reduxjs/toolkit";
import buttons from "./buttonsSlice/buttonsSlice";
import freq250 from "./freq250/freq250Slice";

export const store = configureStore({
  reducer: {
    buttons,
    freq250,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
