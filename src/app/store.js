import {configureStore} from "@reduxjs/toolkit";
import cakeSlice from "../feature/cake/cakeSlice";
import iceCreamSlice from "../feature/icecream/iceCreamSlice";
import userSlice from "../feature/user/userSlice";

const store = configureStore({
    reducer: {
        cake: cakeSlice,
        iceCream: iceCreamSlice,
        users: userSlice
    }
});

export default store;