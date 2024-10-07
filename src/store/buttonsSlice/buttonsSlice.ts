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
					action.payload.split("_")[1] == btn.y
				) {
					if (btn.clicked) {
						btn.clicked = false;
					} else {
						btn.clicked = true;
						// state.selectedBtns.map((item) => {
						// 	if (+item.split("_")[0] == action.payload.split("_")[0]) {
						// 		item = `${action.payload.split("_")[0]}_${
						// 			action.payload.split("_")[1]
						// 		}`;
						// 		console.log(item);
						// 	}
						// });
					}
				} else if (
					action.payload.split("_")[0] == btn.x &&
					action.payload.split("_")[1] != btn.y
				) {
					if (btn.clicked) {
						btn.clicked = false;
					}
				}
			});
		},
		// selectBtns: (state, action) => {
		// 	state.selectedBtns.map((btn) => {
		// 		if (Object.keys(btn)[0] == action.payload.split("_")[0]) {
		// 			btn[action.payload.split("_")[0]] = +action.payload.split("_")[1];
		// 		}
		// 	});
		// },

		// cancelBtnSelection: (state, action) => {
		// 	state.selectedBtns.map((item) => {
		// 		if (Object.keys(item)[0] == action.payload) {
		// 			item[action.payload] = null;
		// 		}
		// 	});
		// },
	},
});

export const { clickBtn } = buttonsSlice.actions;
export default buttonsSlice.reducer;
