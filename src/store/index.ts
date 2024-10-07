import { configureStore } from "@reduxjs/toolkit";
import buttons from "./buttonsSlice/buttonsSlice";

export const store = configureStore({
	reducer: {
		buttons,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
