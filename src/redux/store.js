import {configureStore} from "@reduxjs/toolkit";
import {modalSlice} from "./modalSlice";
import appSlice from "./appSlice";
export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        modal: modalSlice.reducer
    }
})
