import {createSlice} from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState:{
        open: false,
        data: [],
    },
    reducers:{
        openModal: (state,action) => {
            state.open = action.payload.name;
            state.data = action.payload.data || [];
        },
        closeModal : (state,action) => {
            state.open = false;
            state.data =  [];
        }
    }
})
export const {openModal, closeModal} = modalSlice.actions;
export default  modalSlice;
