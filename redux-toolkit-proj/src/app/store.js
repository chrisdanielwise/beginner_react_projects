import { configureStore } from "@reduxjs/toolkit";
import  usersReducer  from "../feautes/User";

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

