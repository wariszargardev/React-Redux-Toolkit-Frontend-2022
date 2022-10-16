import {configureStore} from "@reduxjs/toolkit";
import cakeSlice from "../feature/cake/cakeSlice";

const store = configureStore({
    reducer: {
        cake: cakeSlice
    }
});

export default store;