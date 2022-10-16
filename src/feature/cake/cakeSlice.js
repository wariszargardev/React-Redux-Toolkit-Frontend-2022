import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    numberOfCakes: 10
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        buyCake: (state, action) => {
            state.numberOfCakes = state.numberOfCakes - action.payload;
        },

        reStockCake: (state, action) => {
            state.numberOfCakes = state.numberOfCakes + action.payload
        }

    }
});


export default cakeSlice.reducer
export const {buyCake, reStockCake} = cakeSlice.actions