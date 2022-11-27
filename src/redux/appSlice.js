import {createSlice} from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        mode: "light",
    },
    reducers: {
        setMode: (state, action) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
    }
})
export const {setMode} = appSlice.actions;
export default appSlice;
