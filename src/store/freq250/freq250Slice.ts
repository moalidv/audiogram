import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./state";

const freq250Slice = createSlice({
	name: "freq250",
	initialState,
	reducers: {},
});

export const {} = freq250Slice.actions;
export default freq250Slice.reducer;
