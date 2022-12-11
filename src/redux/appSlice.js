import {createSlice} from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        mode: "light",
        sideBar: false,
        rightBar: "notifications",
        rightBarShow: false,
    },
    reducers: {
        setMode: (state, action) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        showSideBar: (state, action) => {
            state.rightBarShow = false;
            state.sideBar = !state.sideBar;
        },
        changeRightBar: (state, action) => {
            state.sideBar = false;
            state.rightBar = action.payload;
        },
        showRightBar: (state,action) => {
            state.rightBarShow = !state.rightBarShow;
        }
    }
})
export const {setMode, showSideBar,changeRightBar,showRightBar} = appSlice.actions;
export default appSlice;
