import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const buttonsSlice = createSlice({
	name: "buttons",
	initialState,
	reducers: {
		clickBtn: (state, action) => {
			state.records.map((btn) => {
				if (
					action.payload.split("_")[0] == btn.x &&
					action.payload.split("_")[1] == btn.y &&
					!btn.blocked
				) {
					if (btn.clicked) {
						btn.clicked = false;
						unblockColumnBtns(action);
					} else {
						btn.clicked = true;
						blockColumnBtns(action);
					}
				}
			});
		},

		blockColumnBtns: (state, action) => {
			state.records.map((btn) => {
				if (
					action.payload.split("_")[0] == btn.x &&
					action.payload.split("_")[1] != btn.y
				) {
					btn.blocked = true;
				}
			});
		},

		unblockColumnBtns: (state, action) => {
			state.records.map((blockedBtn) => {
				if (
					blockedBtn.x == action.payload.split("_")[0] &&
					blockedBtn.blocked
				) {
					blockedBtn.blocked = false;
				}
			});
		},
	},
});

export const { clickBtn, blockColumnBtns, unblockColumnBtns } =
	buttonsSlice.actions;
export default buttonsSlice.reducer;
// 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 105 110 115 120
