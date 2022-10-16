import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    numberOfIceCream: 20
}

const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        buyIceCream: (state, action) =>{
            state.numberOfIceCream -= action.payload
        },

        reStockIceCream: (state, action) =>{
            state.numberOfIceCream += action.payload
        }
    }
})

export default iceCreamSlice.reducer;
export const {buyIceCream, reStockIceCream} = iceCreamSlice.actions