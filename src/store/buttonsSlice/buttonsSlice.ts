import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const buttonsSlice = createSlice({
    name: "buttons",
    initialState,
    reducers: {
        clickBtn: (state, action) => {
            state.records.map(btn => {
                if (action.payload.split("_")[0] == btn.x && action.payload.split("_")[1] == btn.y) {
                    if(btn.clicked) {
                        btn.clicked = false
                    } else {
                        btn.clicked = true
                    }
                }
            })
        }
    }
})

export const {clickBtn} = buttonsSlice.actions
export default buttonsSlice.reducer
// 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 105 110 115 120 