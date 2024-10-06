import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./state";

const freq250Slice = createSlice({
  name: "freq250",
  initialState,
  reducers: {
    toggleBtn: (state, action) => {
      state.records.map((btn) => {
        if (action.payload == btn.y && !btn.blocked) {
          if (!btn.clicked) {
            btn.clicked = true;
          } else {
            btn.clicked = false;
          }
        } else {
          if (btn.clicked) {
            btn.clicked = false;
          }
        }
      });
    },
    blockOtherBtns: (state, action) => {
      state.records.map((btn) => {
        if (action.payload != btn.y) {
          btn.blocked = true;
        }
      });
    },
  },
});

export const { toggleBtn, blockOtherBtns } = freq250Slice.actions;
export default freq250Slice.reducer;
