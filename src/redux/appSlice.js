import {createSlice} from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        mode: "light",
        sideBar:false,
    },
    reducers: {
        setMode: (state, action) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        showSideBar: (state, action) => {
            state.sideBar = !state.sideBar;
        }
    }
})
export const {setMode,showSideBar} = appSlice.actions;
export default appSlice;
